package com.movebreak.ai.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.StrokeCap
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.PlayArrow
import androidx.compose.runtime.*
import com.movebreak.ai.ui.theme.SuccessGreen
import com.movebreak.ai.ui.theme.PrimaryBlue

@Composable
fun HomeScreen() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(24.dp)
            .verticalScroll(rememberScrollState()),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Column {
                Text("Good afternoon,", style = MaterialTheme.typography.bodyLarge, color = MaterialTheme.colorScheme.outline)
                Text("Nandakumar", style = MaterialTheme.typography.headlineMedium, fontWeight = FontWeight.Bold)
            }
            Surface(
                modifier = Modifier.size(48.dp),
                shape = CircleShape,
                color = MaterialTheme.colorScheme.primaryContainer
            ) {
                Box(contentAlignment = Alignment.Center) {
                    Text("N", fontWeight = FontWeight.Bold, color = MaterialTheme.colorScheme.primary)
                }
            }
        }

        Spacer(modifier = Modifier.height(32.dp))
        
        // AI Coach Suggestion Card
        Card(
            modifier = Modifier.fillMaxWidth(),
            shape = MaterialTheme.shapes.large,
            colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.primary.copy(alpha = 0.1f))
        ) {
            Row(
                modifier = Modifier.padding(16.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text("💡", fontSize = 24.sp)
                Spacer(modifier = Modifier.width(12.dp))
                Text(
                    "You've worked for 3 hours today. A short walk could improve your focus.",
                    style = MaterialTheme.typography.bodyMedium,
                    fontWeight = FontWeight.Medium
                )
            }
        }

        Spacer(modifier = Modifier.height(32.dp))

        // Large Health Score Ring & Timer
        Box(contentAlignment = Alignment.Center, modifier = Modifier.size(300.dp)) {
            // Health Score Outer Ring
            CircularProgressIndicator(
                progress = 0.82f,
                modifier = Modifier.size(280.dp),
                strokeWidth = 8.dp,
                color = PrimaryBlue,
                trackColor = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.3f),
                strokeCap = StrokeCap.Round
            )
            
            // Central Timer Card
            ElevatedCard(
                modifier = Modifier.size(200.dp),
                shape = CircleShape,
                colors = CardDefaults.elevatedCardColors(containerColor = MaterialTheme.colorScheme.surface),
                elevation = CardDefaults.elevatedCardElevation(defaultElevation = 6.dp)
            ) {
                Column(
                    modifier = Modifier.fillMaxSize(),
                    horizontalAlignment = Alignment.CenterHorizontally,
                    verticalArrangement = Arrangement.Center
                ) {
                    Text("Next Break", style = MaterialTheme.typography.labelSmall, color = MaterialTheme.colorScheme.outline)
                    Text("12:45", style = MaterialTheme.typography.displayMedium.copy(fontSize = 36.sp), fontWeight = FontWeight.ExtraBold)
                    Spacer(modifier = Modifier.height(4.dp))
                    Text("Health: 82", style = MaterialTheme.typography.labelMedium, color = PrimaryBlue, fontWeight = FontWeight.Bold)
                }
            }
        }

        Spacer(modifier = Modifier.height(32.dp))

        Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(16.dp)) {
            Button(
                onClick = { },
                modifier = Modifier.weight(1f).height(56.dp),
                shape = MaterialTheme.shapes.large,
                colors = ButtonDefaults.buttonColors(containerColor = PrimaryBlue)
            ) {
                Text("Start Focus")
            }
            OutlinedButton(
                onClick = { },
                modifier = Modifier.weight(1f).height(56.dp),
                shape = MaterialTheme.shapes.large
            ) {
                Text("Take Break")
            }
        }

        Spacer(modifier = Modifier.height(32.dp))

        // Daily Stats Section
        Text(
            "Daily Wellness",
            style = MaterialTheme.typography.titleLarge,
            fontWeight = FontWeight.Bold,
            modifier = Modifier.fillMaxWidth(),
            textAlign = TextAlign.Start
        )
        Spacer(modifier = Modifier.height(16.dp))
        StatsRow()
        
        Spacer(modifier = Modifier.height(16.dp))
        
        // Eye Care Mode Card
        var eyeCareActive by remember { mutableStateOf(true) }
        Card(
            modifier = Modifier.fillMaxWidth(),
            shape = MaterialTheme.shapes.large,
            colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.5f))
        ) {
            Row(
                modifier = Modifier.padding(16.dp),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Text("👁️", fontSize = 20.sp)
                    Spacer(modifier = Modifier.width(12.dp))
                    Column {
                        Text("Eye Care Protection", fontWeight = FontWeight.Bold)
                        Text(if (eyeCareActive) "20-20-20 rule active" else "Currently disabled", style = MaterialTheme.typography.labelSmall)
                    }
                }
                Switch(checked = eyeCareActive, onCheckedChange = { eyeCareActive = it })
            }
        }

        Spacer(modifier = Modifier.height(24.dp))
        
        // Health Disclaimer
        Text(
            "Disclaimer: MoveBreak AI is a wellness assistant and not a medical device. Always follow professional medical advice.",
            style = MaterialTheme.typography.labelSmall,
            color = MaterialTheme.colorScheme.outline,
            textAlign = TextAlign.Center,
            modifier = Modifier.padding(horizontal = 16.dp)
        )
    }
}

@Composable
fun StatsRow() {
    Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(12.dp)) {
        StatItem("Breaks", "6", Modifier.weight(1f))
        StatItem("Walked", "12m", Modifier.weight(1f))
        StatItem("Streak", "8d", Modifier.weight(1f))
    }
}

@Composable
fun StatItem(label: String, value: String, modifier: Modifier) {
    Card(
        modifier = modifier.height(90.dp),
        shape = MaterialTheme.shapes.large,
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.5f))
    ) {
        Column(
            modifier = Modifier.fillMaxSize().padding(12.dp),
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Text(value, style = MaterialTheme.typography.headlineSmall, fontWeight = FontWeight.Bold)
            Text(label, style = MaterialTheme.typography.labelSmall, color = MaterialTheme.colorScheme.outline)
        }
    }
}
 @Composable
fun FocusScreen() {
    var selectedMode by remember { mutableStateOf<String?>(null) }
    
    Column(
        modifier = Modifier.fillMaxSize().padding(24.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text("Focus Mode", style = MaterialTheme.typography.headlineMedium, fontWeight = FontWeight.Bold)
        Text("Minimize distractions and boost productivity", style = MaterialTheme.typography.bodyLarge, color = MaterialTheme.colorScheme.outline)
        
        Spacer(modifier = Modifier.height(32.dp))

        if (selectedMode == null) {
            Column(verticalArrangement = Arrangement.spacedBy(16.dp)) {
                FocusModeCard("Deep Work", "45 mins", "🔥", PrimaryBlue, onClick = { selectedMode = "Deep Work" })
                FocusModeCard("Study Session", "25 mins", "📚", MaterialTheme.colorScheme.secondary, onClick = { selectedMode = "Study Session" })
                FocusModeCard("Quick Focus", "15 mins", "⚡", MaterialTheme.colorScheme.tertiary, onClick = { selectedMode = "Quick Focus" })
            }
        } else {
            // Premium Timer View
            Spacer(modifier = Modifier.height(48.dp))
            Text(selectedMode!!.uppercase(), style = MaterialTheme.typography.labelLarge, color = MaterialTheme.colorScheme.primary, letterSpacing = 2.sp)
            Spacer(modifier = Modifier.height(24.dp))
            
            Box(contentAlignment = Alignment.Center, modifier = Modifier.size(280.dp)) {
                CircularProgressIndicator(
                    progress = 0.6f,
                    modifier = Modifier.fillMaxSize(),
                    strokeWidth = 12.dp,
                    color = MaterialTheme.colorScheme.primary,
                    trackColor = MaterialTheme.colorScheme.surfaceVariant,
                    strokeCap = StrokeCap.Round
                )
                Text("25:00", style = MaterialTheme.typography.displayLarge.copy(fontSize = 64.sp), fontWeight = FontWeight.Bold)
            }
            
            Spacer(modifier = Modifier.height(64.dp))
            
            Row(horizontalArrangement = Arrangement.spacedBy(16.dp)) {
                Button(
                    onClick = { selectedMode = null },
                    modifier = Modifier.weight(1f).height(56.dp),
                    shape = MaterialTheme.shapes.large
                ) {
                    Text("End Session")
                }
                OutlinedButton(
                    onClick = { },
                    modifier = Modifier.weight(1f).height(56.dp),
                    shape = MaterialTheme.shapes.large
                ) {
                    Text("Pause")
                }
            }
        }
    }
}

@Composable
fun FocusModeCard(title: String, duration: String, icon: String, accentColor: androidx.compose.ui.graphics.Color, onClick: () -> Unit) {
    ElevatedCard(
        onClick = onClick,
        modifier = Modifier.fillMaxWidth(),
        shape = MaterialTheme.shapes.extraLarge,
        colors = CardDefaults.elevatedCardColors(containerColor = MaterialTheme.colorScheme.surface)
    ) {
        Row(
            modifier = Modifier.padding(24.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Surface(
                modifier = Modifier.size(56.dp),
                shape = CircleShape,
                color = accentColor.copy(alpha = 0.1f)
            ) {
                Box(contentAlignment = Alignment.Center) {
                    Text(icon, fontSize = 28.sp)
                }
            }
            Spacer(modifier = Modifier.width(20.dp))
            Column {
                Text(title, style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.Bold)
                Text(duration, style = MaterialTheme.typography.bodyMedium, color = MaterialTheme.colorScheme.outline)
            }
            Spacer(modifier = Modifier.weight(1f))
            Icon(Icons.Default.PlayArrow, contentDescription = null, tint = accentColor)
        }
    }
}
       
@Composable
fun ProgressScreen() {
    Column(
        modifier = Modifier.fillMaxSize().padding(24.dp).verticalScroll(rememberScrollState())
    ) {
        Text("Activity Analytics", style = MaterialTheme.typography.headlineMedium, fontWeight = FontWeight.Bold)
        Spacer(modifier = Modifier.height(24.dp))

        // Large Health Score Card
        Card(
            modifier = Modifier.fillMaxWidth().height(180.dp),
            shape = MaterialTheme.shapes.extraLarge,
            colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.primaryContainer.copy(alpha = 0.3f))
        ) {
            Column(modifier = Modifier.padding(24.dp)) {
                Text("Weekly Work Health", style = MaterialTheme.typography.labelMedium)
                Text("85 / 100", style = MaterialTheme.typography.displaySmall, color = MaterialTheme.colorScheme.primary, fontWeight = FontWeight.ExtraBold)
                Spacer(modifier = Modifier.height(12.dp))
                LinearProgressIndicator(
                    progress = 0.85f,
                    modifier = Modifier.fillMaxWidth().height(8.dp),
                    strokeCap = StrokeCap.Round
                )
                Spacer(modifier = Modifier.height(8.dp))
                Text("Great work! You've improved by 5% this week.", style = MaterialTheme.typography.labelSmall)
            }
        }

        Spacer(modifier = Modifier.height(32.dp))

        Text("Historical Data", style = MaterialTheme.typography.titleLarge, fontWeight = FontWeight.Bold)
        Spacer(modifier = Modifier.height(16.dp))
        
        // Mock chart placeholder
        Box(
            modifier = Modifier.fillMaxWidth().height(200.dp).padding(16.dp),
            contentAlignment = Alignment.BottomCenter
        ) {
            Row(modifier = Modifier.fillMaxSize(), horizontalArrangement = Arrangement.SpaceEvenly, verticalAlignment = Alignment.Bottom) {
                listOf(0.4f, 0.7f, 0.5f, 0.9f, 0.6f, 0.8f, 0.75f).forEach { height ->
                    Box(modifier = Modifier.weight(1f).padding(horizontal = 4.dp).fillMaxHeight(height).background(MaterialTheme.colorScheme.primary, shape = MaterialTheme.shapes.small))
                }
            }
        }
        
        Spacer(modifier = Modifier.height(32.dp))
        
        // Achievements Section
        Text("Milestones", style = MaterialTheme.typography.titleLarge, fontWeight = FontWeight.Bold)
        Spacer(modifier = Modifier.height(16.dp))
         ACHIEVEMENT_ROW()
    }
}

@Composable
fun ACHIEVEMENT_ROW() {
    Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(12.dp)) {
        AchievementItem("🔥", "7 Day Streak")
        AchievementItem("🚶", "50 Breaks")
        AchievementItem("🧘", "Perfect Posture")
    }
}

@Composable
fun AchievementItem(icon: String, label: String) {
    Card(
        modifier = Modifier.size(100.dp),
        shape = MaterialTheme.shapes.large,
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.4f))
    ) {
        Column(
            modifier = Modifier.fillMaxSize().padding(8.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Text(icon, fontSize = 24.sp)
            Spacer(modifier = Modifier.height(4.dp))
            Text(label, style = MaterialTheme.typography.labelSmall, textAlign = TextAlign.Center)
        }
    }
}

@Composable
fun SettingsScreen(
    onLogout: () -> Unit,
    onDeleteAccount: () -> Unit,
    isDarkMode: Boolean,
    onThemeToggle: () -> Unit
) {
    Column(
        modifier = Modifier.fillMaxSize().padding(24.dp).verticalScroll(rememberScrollState())
    ) {
        Text("Settings", style = MaterialTheme.typography.headlineMedium, fontWeight = FontWeight.Bold)
        Spacer(modifier = Modifier.height(24.dp))

        SettingsSection("Appearance") {
            SettingsToggleItem("Dark Mode", isDarkMode, onToggle = onThemeToggle)
        }

        Spacer(modifier = Modifier.height(24.dp))

        SettingsSection("Preferences") {
            SettingsToggleItem("Smart AI Reminders", true)
            SettingsToggleItem("Notification Sound", true)
            SettingsToggleItem("Vibration", true)
        }

        Spacer(modifier = Modifier.height(24.dp))

        SettingsSection("Working Hours") {
            SettingsValueItem("Start Time", "08:00 AM")
            SettingsValueItem("End Time", "12:00 AM")
        }

        Spacer(modifier = Modifier.height(24.dp))

        SettingsSection("Health Features") {
            SettingsToggleItem("Posture Detection (Beta)", false)
            SettingsToggleItem("Google Fit Sync", true)
        }

        Spacer(modifier = Modifier.height(24.dp))

        SettingsSection("Account") {
            TextButton(
                onClick = onLogout,
                modifier = Modifier.fillMaxWidth()
            ) {
                Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.Start) {
                    Text("Logout", style = MaterialTheme.typography.bodyLarge, color = MaterialTheme.colorScheme.primary)
                }
            }
            TextButton(
                onClick = onDeleteAccount,
                modifier = Modifier.fillMaxWidth()
            ) {
                Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.Start) {
                    Text("Delete Account", style = MaterialTheme.typography.bodyLarge, color = MaterialTheme.colorScheme.error)
                }
            }
        }

        Spacer(modifier = Modifier.height(24.dp))

        SettingsSection("Transparency") {
            TextButton(
                onClick = { /* Open Privacy Policy URI or Screen */ },
                modifier = Modifier.fillMaxWidth()
            ) {
                Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.Start) {
                    Text("Read Privacy Policy", style = MaterialTheme.typography.bodyLarge)
                }
            }
        }
    }
}

@Composable
fun SettingsSection(title: String, content: @Composable ColumnScope.() -> Unit) {
    Column {
        Text(title, style = MaterialTheme.typography.labelLarge, color = MaterialTheme.colorScheme.primary, fontWeight = FontWeight.Bold)
        Spacer(modifier = Modifier.height(8.dp))
        Card(
            modifier = Modifier.fillMaxWidth(),
            shape = MaterialTheme.shapes.large,
            colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.3f))
        ) {
            Column(modifier = Modifier.padding(horizontal = 16.dp, vertical = 8.dp)) {
                content()
            }
        }
    }
}

@Composable
fun SettingsToggleItem(label: String, initialValue: Boolean, onToggle: (() -> Unit)? = null) {
    var internalChecked by remember { mutableStateOf(initialValue) }
    
    // Use the passed value if provided, otherwise use internal state
    val isChecked = onToggle?.let { initialValue } ?: internalChecked

    Row(
        modifier = Modifier.fillMaxWidth().height(56.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.SpaceBetween
    ) {
        Text(label, style = MaterialTheme.typography.bodyLarge)
        Switch(
            checked = isChecked, 
            onCheckedChange = { 
                if (onToggle != null) {
                    onToggle()
                } else {
                    internalChecked = it
                }
            }
        )
    }
}

@Composable
fun SettingsValueItem(label: String, value: String) {
    Row(
        modifier = Modifier.fillMaxWidth().height(56.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.SpaceBetween
    ) {
        Text(label, style = MaterialTheme.typography.bodyLarge)
        Text(value, style = MaterialTheme.typography.bodyLarge, color = MaterialTheme.colorScheme.primary)
    }
}
