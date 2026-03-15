import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Shield, Timer, Activity, ChevronRight, Zap } from 'lucide-react'

const Onboarding = () => {
    const [step, setStep] = useState(0) // 0: Splash, 1-3: Walkthrough
    const navigate = useNavigate()

    const steps = [
        {
            title: "Posture Guard",
            description: "Real-time AI monitoring ensures you maintain perfect spinal alignment throughout your workday.",
            icon: <Shield size={48} color="var(--primary)" />,
            color: "var(--primary)"
        },
        {
            title: "Deep Work Protocol",
            description: "Maximize productivity with science-backed focus intervals and smart break scheduling.",
            icon: <Timer size={48} color="var(--success)" />,
            color: "var(--success)"
        },
        {
            title: "Health Analytics",
            description: "Get deep insights into your health trends and personalized AI coaching to optimize your routine.",
            icon: <Activity size={48} color="var(--warning)" />,
            color: "var(--warning)"
        }
    ]

    const nextStep = () => {
        if (step < 3) {
            setStep(step + 1)
        } else {
            navigate('/dashboard')
        }
    }

    return (
        <div style={{ 
            width: '100vw', 
            height: '100vh', 
            background: 'var(--background)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            overflow: 'hidden'
        }}>
            <AnimatePresence mode="wait">
                {step === 0 ? (
                    <motion.div 
                        key="splash"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{ textAlign: 'center' }}
                    >
                        <div style={{ 
                            width: 80, 
                            height: 80, 
                            background: 'var(--primary)', 
                            borderRadius: 20, 
                            margin: '0 auto 24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)'
                        }}>
                            <Zap color="white" size={40} />
                        </div>
                        <h1 style={{ fontSize: 40, fontWeight: 900, color: 'var(--primary)', marginBottom: 8 }}>MoveBreak AI</h1>
                        <p style={{ color: 'var(--text-secondary)', fontSize: 18, marginBottom: 40 }}>Work smarter, live healthier.</p>
                        <button 
                            className="btn-primary" 
                            style={{ padding: '16px 40px', fontSize: 18 }}
                            onClick={() => setStep(1)}
                        >
                            Get Started
                        </button>
                    </motion.div>
                ) : (
                    <motion.div 
                        key={`step-${step}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        style={{ maxWidth: 400, width: '90%', textAlign: 'center' }}
                    >
                        <div style={{ 
                            width: 120, 
                            height: 120, 
                            background: 'var(--surface)', 
                            borderRadius: '50%', 
                            margin: '0 auto 40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: `2px solid ${steps[step-1].color}`
                        }}>
                            {steps[step-1].icon}
                        </div>
                        <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 16 }}>{steps[step-1].title}</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: 18, lineHeight: 1.6, marginBottom: 48 }}>
                            {steps[step-1].description}
                        </p>
                        
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: 48 }}>
                            {[1, 2, 3].map((s) => (
                                <div key={s} style={{ 
                                    width: s === step ? 24 : 8, 
                                    height: 8, 
                                    borderRadius: 4, 
                                    background: s === step ? 'var(--primary)' : 'var(--surface)',
                                    transition: 'all 0.3s'
                                }} />
                            ))}
                        </div>

                        <button 
                            className="btn-primary" 
                            style={{ width: '100%', padding: '16px', fontSize: 18 }}
                            onClick={nextStep}
                        >
                            {step === 3 ? 'Launch Dashboard' : 'Next'} <ChevronRight size={20} style={{ marginLeft: 8 }} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Onboarding
