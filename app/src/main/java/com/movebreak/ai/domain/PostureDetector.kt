package com.movebreak.ai.domain

import android.graphics.Bitmap
import com.google.mlkit.vision.pose.PoseDetection
import com.google.mlkit.vision.pose.PoseDetectorOptionsBase

data class PostureResult(
    val isSlouching: Boolean,
    val confidence: Float,
    val message: String? = null
)

interface PostureDetector {
    fun analyzePosture(bitmap: Bitmap, onResult: (PostureResult) -> Unit)
}
