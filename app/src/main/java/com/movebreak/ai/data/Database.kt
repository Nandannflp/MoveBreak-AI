package com.movebreak.ai.data

import android.content.Context
import androidx.room.*

@Entity(tableName = "health_stats")
data class HealthStat(
    @PrimaryKey val date: String, // YYYY-MM-DD
    val breaksTaken: Int,
    val minutesWalked: Int,
    val focusSessions: Int,
    val streak: Int
)

    @Query("SELECT * FROM health_stats ORDER BY date DESC")
    fun getAllStats(): Flow<List<HealthStat>>

    @Query("SELECT * FROM health_stats")
    suspend fun getAllStatsList(): List<HealthStat>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertStat(stat: HealthStat)
}

@Database(entities = [HealthStat::class], version = 1)
abstract class AppDatabase : RoomDatabase() {
    abstract fun healthDao(): HealthDao
}
