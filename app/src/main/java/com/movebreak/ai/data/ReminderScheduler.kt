package com.movebreak.ai.data

import android.content.Context
import androidx.work.*
import java.util.concurrent.TimeUnit

object ReminderScheduler {
    fun scheduleReminder(context: Context, intervalMinutes: Long) {
        try {
            val constraints = Constraints.Builder()
                .setRequiredNetworkType(NetworkType.NOT_REQUIRED)
                .setRequiresBatteryNotLow(false)
                .build()

            val workRequest = PeriodicWorkRequestBuilder<ReminderWorker>(intervalMinutes, TimeUnit.MINUTES)
                .setConstraints(constraints)
                .build()

            WorkManager.getInstance(context).enqueueUniquePeriodicWork(
                "movebreak_reminder_task",
                ExistingPeriodicWorkPolicy.UPDATE, // Update instead of REPLACE to keep progress
                workRequest
            )
        } catch (e: Exception) {
            // Log error or handle gracefully
        }
    }

    fun cancelReminders(context: Context) {
        try {
            WorkManager.getInstance(context).cancelUniqueWork("movebreak_reminder_task")
        } catch (e: Exception) {}
    }
}
