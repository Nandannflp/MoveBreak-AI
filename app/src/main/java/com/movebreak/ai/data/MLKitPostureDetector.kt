package com.movebreak.ai.data

import android.graphics.Bitmap
import com.google.mlkit.vision.common.InputImage
import com.google.mlkit.vision.pose.PoseDetection
import com.google.mlkit.vision.pose.PoseDetector
import com.google.mlkit.vision.pose.PoseDetectorOptionsBase
import com.google.mlkit.vision.pose.defaults.PoseDetectorOptions
import com.movebreak.ai.domain.PostureDetector
import com.movebreak.ai.domain.PostureResult

class MLKitPostureDetector : PostureDetector {
    private val options = PoseDetectorOptions.Builder()
        .setDetectorMode(PoseDetectorOptions.STREAM_MODE)
        .build()
        
    private val detector = PoseDetection.getClient(options)

    override fun analyzePosture(bitmap: Bitmap, onResult: (PostureResult) -> Unit) {
        val image = InputImage.fromBitmap(bitmap, 0)
        
        detector.process(image)
            .addOnSuccessListener { pose ->
                // Heuristic: Check shoulder level and nose-to-shoulder distance
                // Simplified for implementation
                val leftShoulder = pose.getPoseLandmark(11)
                val rightShoulder = pose.getPoseLandmark(12)
                
                if (leftShoulder != null && rightShoulder != null) {
                    val isSlouching = Math.abs(leftShoulder.position.y - rightShoulder.position.y) > 50
                    onResult(PostureResult(isSlouching, 0.9f, if (isSlouching) "Lift your shoulders" else "Posture looks good"))
                }
            }
            .addOnFailureListener {
                onResult(PostureResult(false, 0f, "Detection failed"))
            }
    }

    fun close() {
        try {
            detector.close()
        } catch (e: Exception) {}
    }
}
