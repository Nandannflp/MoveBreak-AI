package com.movebreak.ai.domain.model

data class User(
    val uid: String,
    val name: String,
    val email: String,
    val profilePhoto: String? = null,
    val createdAt: Long = System.currentTimeMillis()
)

data class UserStats(
    val userId: String,
    val breaksTaken: Int = 0,
    val focusSessions: Int = 0,
    val movementMinutes: Int = 0,
    val healthScore: Int = 0,
    val streak: Int = 0
)

data class UserSettings(
    val userId: String,
    val reminderInterval: Int = 20,
    val workStartTime: String = "08:00",
    val workEndTime: String = "22:00",
    val eyeCareEnabled: Boolean = true,
    val postureAlertsEnabled: Boolean = false
)
