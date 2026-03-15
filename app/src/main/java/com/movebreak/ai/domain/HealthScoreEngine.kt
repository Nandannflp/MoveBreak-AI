package com.movebreak.ai.domain

object HealthScoreEngine {
    fun calculateScore(
        breaksTaken: Int,
        minutesWalked: Int,
        focusSessions: Int,
        screenTimeMinutes: Int
    ): Int {
        // Simple weighted heuristic for demonstration
        val breakScore = (breaksTaken * 10).coerceAtMost(40)
        val walkScore = (minutesWalked * 2).coerceAtMost(30)
        val focusScore = (focusSessions * 5).coerceAtMost(20)
        val screenTimePenalty = (screenTimeMinutes / 60) * 5
        
        return (breakScore + walkScore + focusScore - screenTimePenalty).coerceIn(0, 100)
    }
}
