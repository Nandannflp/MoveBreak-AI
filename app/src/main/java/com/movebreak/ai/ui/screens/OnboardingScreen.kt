package com.movebreak.ai.ui.screens

import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun OnboardingScreen(onComplete: () -> Unit) {
    var currentStep by remember { mutableStateOf(1) }
    
    Surface(modifier = Modifier.fillMaxSize(), color = MaterialTheme.colorScheme.background) {
        Column(
            modifier = Modifier.fillMaxSize().padding(32.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            when (currentStep) {
                1 -> WelcomeStep { currentStep = 2 }
                2 -> WorkTypeStep { currentStep = 3 }
                3 -> DurationStep { currentStep = 4 }
                4 -> ReminderStep { currentStep = 5 }
                5 -> PermissionStep(onComplete)
            }
        }
    }
}

@Composable
fun WelcomeStep(onNext: () -> Unit) {
    Text("Work smarter. Move better.", style = MaterialTheme.typography.displayLarge, textAlign = TextAlign.Center)
    Spacer(modifier = Modifier.height(16.dp))
    Text("Your AI assistant for healthier workdays.", style = MaterialTheme.typography.bodyLarge, textAlign = TextAlign.Center, color = MaterialTheme.colorScheme.outline)
    Spacer(modifier = Modifier.height(48.dp))
    Button(onClick = onNext, modifier = Modifier.fillMaxWidth().height(56.dp)) {
        Text("Start Setup")
    }
}

@Composable
fun WorkTypeStep(onNext: () -> Unit) {
    Text("What is your work?", style = MaterialTheme.typography.headlineMedium)
    Spacer(modifier = Modifier.height(24.dp))
    val options = listOf("Office Worker", "Student", "Developer", "Designer", "Freelancer")
    options.forEach { option ->
        OutlinedButton(onClick = onNext, modifier = Modifier.fillMaxWidth().padding(vertical = 4.dp)) {
            Text(option)
        }
    }
}

@Composable
fun DurationStep(onNext: () -> Unit) {
    Text("Daily work duration?", style = MaterialTheme.typography.headlineMedium)
    Spacer(modifier = Modifier.height(24.dp))
    val options = listOf("4 hours", "6 hours", "8 hours", "10+ hours")
    options.forEach { option ->
        OutlinedButton(onClick = onNext, modifier = Modifier.fillMaxWidth().padding(vertical = 4.dp)) {
            Text(option)
        }
    }
}

@Composable
fun ReminderStep(onNext: () -> Unit) {
    Text("Reminder Style", style = MaterialTheme.typography.headlineMedium)
    Spacer(modifier = Modifier.height(24.dp))
    val options = listOf("Every 20 minutes", "Every 30 minutes", "Smart AI reminders")
    options.forEach { option ->
        OutlinedButton(onClick = onNext, modifier = Modifier.fillMaxWidth().padding(vertical = 4.dp)) {
            Text(option)
        }
    }
}

@Composable
fun PermissionStep(onComplete: () -> Unit) {
    Text("Your Privacy Matters", style = MaterialTheme.typography.headlineMedium)
    Spacer(modifier = Modifier.height(16.dp))
    Text(
        "MoveBreak AI processes all health data and camera frames locally on your device. We never upload your personal data to any server.",
        style = MaterialTheme.typography.bodyMedium,
        textAlign = TextAlign.Center,
        color = MaterialTheme.colorScheme.primary
    )
    Spacer(modifier = Modifier.height(16.dp))
    Text(
        "To help you stay active, we need permissions for notifications and activity tracking.",
        style = MaterialTheme.typography.bodyLarge,
        textAlign = TextAlign.Center
    )
    Spacer(modifier = Modifier.height(32.dp))
    Text(
        "By continuing, you acknowledge our Private and Local-First approach.",
        style = MaterialTheme.typography.labelSmall,
        color = MaterialTheme.colorScheme.outline
    )
    Spacer(modifier = Modifier.height(48.dp))
    Button(onClick = onComplete, modifier = Modifier.fillMaxWidth().height(56.dp)) {
        Text("I Understand & Finish")
    }
}
