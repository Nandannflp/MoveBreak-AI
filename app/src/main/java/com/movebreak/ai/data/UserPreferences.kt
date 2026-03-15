package com.movebreak.ai.data

import android.content.Context
import android.content.SharedPreferences

class UserPreferences(context: Context) {
    private val prefs: SharedPreferences = context.getSharedPreferences("movebreak_prefs", Context.MODE_PRIVATE)

    var hasCompletedOnboarding: Boolean
        get() = prefs.getBoolean("onboarding_completed", false)
        set(value) = prefs.edit().putBoolean("onboarding_completed", value).apply()

    var smartRemindersEnabled: Boolean
        get() = prefs.getBoolean("smart_reminders_enabled", true)
        set(value) = prefs.edit().putBoolean("smart_reminders_enabled", value).apply()

    var eyeCareEnabled: Boolean
        get() = prefs.getBoolean("eyecare_enabled", true)
        set(value) = prefs.edit().putBoolean("eyecare_enabled", value).apply()

    var isDarkMode: Boolean?
        get() = if (prefs.contains("is_dark_mode")) prefs.getBoolean("is_dark_mode", false) else null
        set(value) {
            if (value == null) prefs.edit().remove("is_dark_mode").apply()
            else prefs.edit().putBoolean("is_dark_mode", value).apply()
        }
}
