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
import com.movebreak.ai.ui.theme.SuccessGreen

@Composable
fun BreakScreen(onReturn: () -> Unit) {
    var secondsLeft by remember { mutableIntStateOf(120) }
    val instructions = listOf(
        "Roll your shoulders",
        "Stretch your back",
        "Look away from the screen",
        "Take deep breaths"
    )
    val currentInstructionIndex = (120 - secondsLeft) / 20 % instructions.size

    LaunchedEffect(Unit) {
        while (secondsLeft > 0) {
            kotlinx.coroutines.delay(1000)
            secondsLeft--
        }
    }

    Surface(modifier = Modifier.fillMaxSize(), color = MaterialTheme.colorScheme.background) {
        Column(
            modifier = Modifier.fillMaxSize().padding(32.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Text("Break Time", style = MaterialTheme.typography.headlineMedium, color = SuccessGreen)
            Spacer(modifier = Modifier.height(8.dp))
            Text("Great job keeping active!", style = MaterialTheme.typography.bodyLarge)

            Spacer(modifier = Modifier.height(48.dp))

            Text(
                String.format("%02d:%02d", secondsLeft / 60, secondsLeft % 60),
                style = MaterialTheme.typography.displayLarge.copy(fontSize = 80.sp)
            )

            Spacer(modifier = Modifier.height(48.dp))

            Text(
                instructions[currentInstructionIndex],
                style = MaterialTheme.typography.headlineSmall,
                textAlign = TextAlign.Center,
                fontWeight = FontWeight.Medium
            )

            Spacer(modifier = Modifier.height(64.dp))

            if (secondsLeft == 0) {
                Button(onClick = onReturn, modifier = Modifier.fillMaxWidth().height(56.dp)) {
                    Text("Return to Work")
                }
            } else {
                TextButton(onClick = onReturn) {
                    Text("Skip Break", color = MaterialTheme.colorScheme.outline)
                }
            }
        }
    }
}
