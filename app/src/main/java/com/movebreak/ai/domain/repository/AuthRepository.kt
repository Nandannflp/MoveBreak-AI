package com.movebreak.ai.domain.repository

import com.movebreak.ai.domain.model.User
import kotlinx.coroutines.flow.Flow

interface AuthRepository {
    val currentUser: Flow<User?>
    
    suspend fun loginWithEmail(email: String, password: String): Result<User>
    suspend fun registerWithEmail(email: String, password: String, name: String): Result<User>
    suspend fun loginWithGoogle(idToken: String): Result<User>
    suspend fun logout()
    suspend fun deleteAccount(): Result<Unit>
    suspend fun resetPassword(email: String): Result<Unit>
}
