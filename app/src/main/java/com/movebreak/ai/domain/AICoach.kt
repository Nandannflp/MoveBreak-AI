package com.movebreak.ai.domain

object AICoach {
    fun getSuggestion(
        hoursWorkedToday: Int,
        breakConsistency: Float,
        isCurrentlyFocusing: Boolean
    ): String {
        return when {
            isCurrentlyFocusing -> "You're in the zone. Consider a quick eye-rest if you feel any strain."
            hoursWorkedToday > 4 && breakConsistency < 0.5f -> "You've been productive today! To maintain this energy, you might enjoy a brief 5-minute movement break."
            breakConsistency > 0.8f -> "Great rhythm! Your balance between work and breaks is excellent today."
            else -> "A quick reminder of the 20-20-20 rule: resting your eyes every 20 minutes can help maintain focus."
        }
    }
}
