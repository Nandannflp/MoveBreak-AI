package com.movebreak.ai.data.repository

import com.google.firebase.firestore.FirebaseFirestore
import com.movebreak.ai.data.HealthDao
import com.movebreak.ai.data.HealthStat
import com.movebreak.ai.domain.repository.AuthRepository
import com.movebreak.ai.domain.repository.HealthRepository
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.tasks.await

class HealthRepositoryImpl(
    private val healthDao: HealthDao,
    private val firestore: FirebaseFirestore,
    private val authRepository: AuthRepository
) : HealthRepository {

    override fun getStats(): Flow<List<HealthStat>> {
        // In a real app, this would be a more complex flow merging local and cloud
        // For now, we return local flow and rely on syncWithCloud for updates
        return healthDao.getAllStats() // Need to add this to DAO
    }

    override suspend fun updateStat(stat: HealthStat) {
        healthDao.insertStat(stat)
        syncWithCloud() // Try to sync immediately or let a worker handle it
    }

    override suspend fun syncWithCloud(): Result<Unit> {
        return try {
            val user = authRepository.currentUser.first() ?: throw Exception("Auth required for sync")
            
            // 1. Get local data
            val localStats = healthDao.getAllStatsList() // Need to add this to DAO

            // 2. Upload to Firestore
            val batch = firestore.batch()
            localStats.forEach { stat ->
                val docRef = firestore.collection("UserStats").document(user.uid)
                    .collection("DailyStats").document(stat.date)
                batch.set(docRef, stat)
            }
            batch.commit().await()

            // 3. Update overall user stats
            val totalStats = mapOf(
                "totalBreaks" to localStats.sumOf { it.breaksTaken },
                "totalMovement" to localStats.sumOf { it.minutesWalked },
                "currentStreak" to (localStats.lastOrNull()?.streak ?: 0)
            )
            firestore.collection("UserStats").document(user.uid).set(totalStats).await()

            Result.success(Unit)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
}
