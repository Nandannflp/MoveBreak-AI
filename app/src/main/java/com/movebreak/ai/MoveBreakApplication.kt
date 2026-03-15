package com.movebreak.ai

import android.app.Application
import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.Context
import android.os.Build

class MoveBreakApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        createNotificationChannels()
    }

    private fun createNotificationChannels() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val notificationManager = getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
            
            val reminderChannel = NotificationChannel(
                "movebreak_reminders",
                "MoveBreak Reminders",
                NotificationManager.IMPORTANCE_HIGH
            ).apply {
                description = "Periodic movement reminders to keep you active."
            }
            
            val eyeCareChannel = NotificationChannel(
                "eyecare_reminders",
                "Eye Care Protection",
                NotificationManager.IMPORTANCE_HIGH
            ).apply {
                description = "20-20-20 rule reminders for eye health."
            }

            notificationManager.createNotificationChannel(reminderChannel)
            notificationManager.createNotificationChannel(eyeCareChannel)
        }
    }
}
