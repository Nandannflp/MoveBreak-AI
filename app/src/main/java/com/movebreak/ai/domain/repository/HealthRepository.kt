package com.movebreak.ai.domain.repository

import com.movebreak.ai.data.HealthStat
import kotlinx.coroutines.flow.Flow

interface HealthRepository {
    fun getStats(): Flow<List<HealthStat>>
    suspend fun updateStat(stat: HealthStat)
    suspend fun syncWithCloud(): Result<Unit>
}
