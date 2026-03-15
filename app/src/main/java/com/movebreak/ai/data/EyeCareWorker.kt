package com.movebreak.ai.data

import android.content.Context
import androidx.work.CoroutineWorker
import androidx.work.WorkerParameters
import androidx.core.app.NotificationCompat
import android.app.NotificationManager
import android.app.NotificationChannel
import android.os.Build

class EyeCareWorker(appContext: Context, workerParams: WorkerParameters) :
    CoroutineWorker(appContext, workerParams) {

    override fun suspend doWork(): Result {
        return try {
            sendEyeCareNotification()
            Result.success()
        } catch (e: Exception) {
            Result.failure()
        }
    }

    private fun sendEyeCareNotification() {
        val channelId = "eyecare_reminders"
        val notificationManager = applicationContext.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val channel = NotificationChannel(channelId, "Eye Care Protection", NotificationManager.IMPORTANCE_HIGH)
            notificationManager.createNotificationChannel(channel)
        }

        val builder = NotificationCompat.Builder(applicationContext, channelId)
            .setSmallIcon(android.R.drawable.ic_menu_view)
            .setContentTitle("Eye Care Break")
            .setContentText("Look at something 20 feet away for 20 seconds. 👁️")
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .setAutoCancel(true)

        notificationManager.notify(2, builder.build())
    }
}
