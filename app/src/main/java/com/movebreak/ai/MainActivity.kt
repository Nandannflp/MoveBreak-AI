package com.movebreak.ai

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.ui.Modifier
import com.movebreak.ai.ui.theme.MoveBreakAITheme
import com.movebreak.ai.ui.screens.MainScreen
import androidx.compose.runtime.*
import androidx.compose.runtime.saveable.rememberSaveable
import com.movebreak.ai.ui.auth.AuthViewModel
import com.movebreak.ai.ui.auth.LoginScreen
import com.movebreak.ai.ui.auth.RegisterScreen
import com.movebreak.ai.ui.auth.AuthState
import com.google.firebase.auth.FirebaseAuth
import com.movebreak.ai.data.repository.AuthRepositoryImpl
import androidx.lifecycle.viewmodel.compose.viewModel

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val prefs = UserPreferences(this)
        
        // Manual DI for demonstration (In production, use Hilt)
        val authRepo = AuthRepositoryImpl(FirebaseAuth.getInstance())
        
        setContent {
            val darkThemePref = prefs.isDarkMode
            val systemDark = isSystemInDarkTheme()
            var darkTheme by remember { mutableStateOf(darkThemePref ?: systemDark) }

            MoveBreakAITheme(darkTheme = darkTheme) {
                val viewModel: AuthViewModel = viewModel(factory = object : androidx.lifecycle.ViewModelProvider.Factory {
                    override fun <T : androidx.lifecycle.ViewModel> create(modelClass: Class<T>): T {
                        return AuthViewModel(authRepo) as T
                    }
                })
                
                val user by viewModel.currentUser.collectAsState()
                val authState by viewModel.authState.collectAsState()
                var showOnboarding by rememberSaveable { mutableStateOf(!prefs.hasCompletedOnboarding) }
                
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    when {
                        user == null -> {
                            var isLoginMode by remember { mutableStateOf(true) }
                            if (isLoginMode) {
                                LoginScreen(
                                    onLoginClick = { e, p -> viewModel.loginWithEmail(e, p) },
                                    onGoogleLoginClick = { /* Handle Google Sign-In */ },
                                    onRegisterNavigate = { isLoginMode = false },
                                    authState = authState
                                )
                            } else {
                                RegisterScreen(
                                    onRegisterClick = { e, p, n -> viewModel.registerWithEmail(e, p, n) },
                                    onLoginNavigate = { isLoginMode = true },
                                    authState = authState
                                )
                            }
                        }
                        showOnboarding -> {
                            OnboardingScreen(onComplete = { 
                                prefs.hasCompletedOnboarding = true
                                showOnboarding = false 
                            })
                        }
                        else -> {
                            MainScreen(
                                onLogout = { viewModel.logout() },
                                onDeleteAccount = { viewModel.deleteAccount() },
                                isDarkMode = darkTheme,
                                onThemeToggle = {
                                    darkTheme = !darkTheme
                                    prefs.isDarkMode = darkTheme
                                }
                            )
                        }
                    }
                }
            }
        }
    }
}
