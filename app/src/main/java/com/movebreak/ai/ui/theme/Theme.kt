package com.movebreak.ai.ui.theme

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

private val DarkColorScheme = darkColorScheme(
    primary = PrimaryLight, // Lighter blue for dark mode visibility
    onPrimary = Color.Black,
    secondary = SuccessGreen,
    tertiary = WarningOrange,
    background = BackgroundDark,
    surface = SurfaceDark,
    onBackground = TextLight,
    onSurface = TextLight,
    onSurfaceVariant = TextGrayLight,
    error = ErrorRed
)

private val LightColorScheme = lightColorScheme(
    primary = PrimaryBlue,
    onPrimary = Color.White,
    secondary = SuccessGreen,
    tertiary = WarningOrange,
    background = BackgroundLight,
    surface = SurfaceLight,
    onBackground = TextDark,
    onSurface = TextDark,
    onSurfaceVariant = TextGray,
    error = ErrorRed
)

@Composable
fun MoveBreakAITheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable () -> Unit
) {
    val colorScheme = if (darkTheme) DarkColorScheme else LightColorScheme

    MaterialTheme(
        colorScheme = colorScheme,
        typography = Typography,
        content = content
    )
}
