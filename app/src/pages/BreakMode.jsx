import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Settings, Bolt, Accessibility, EyeOff, Footprints, Info, Play, Pause, SkipForward } from 'lucide-react'

const BreakMode = () => {
    const [timeLeft, setTimeLeft] = useState(2 * 60)
    const [isActive, setIsActive] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        let interval = null
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(prev => prev - 1)
            }, 1000)
        } else if (timeLeft === 0) {
            setIsActive(false)
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isActive, timeLeft])

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }

    const progress = (timeLeft / (2 * 60)) * 1000

    const tips = [
        { icon: <Accessibility size={24} />, title: "Stretch shoulders", desc: "Release deep tension" },
        { icon: <Info size={24} />, title: "Relax neck", desc: "Relieve daily stiffness", active: true },
        { icon: <EyeOff size={24} />, title: "Look away", desc: "Rest your eye muscles" },
        { icon: <Footprints size={24} />, title: "Walk around", desc: "Boost blood flow" },
    ]

    return (
        <div style={{ 
            minHeight: '100vh', 
            width: '100%', 
            background: 'var(--background)', 
            fontFamily: "'Space Grotesk', sans-serif",
            color: 'var(--text-primary)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
        }}>
            {/* Background Decor */}
            <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40%', height: '40%', background: 'rgba(56, 56, 255, 0.1)', borderRadius: '50%', filter: 'blur(120px)' }}></div>
            <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '40%', height: '40%', background: 'rgba(56, 56, 255, 0.05)', borderRadius: '50%', filter: 'blur(120px)' }}></div>

            {/* Nav */}
            <nav style={{ position: 'fixed', top: 0, left: 0, width: '100%', padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: 40, height: 40, background: 'var(--primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px rgba(56, 56, 255, 0.2)' }}>
                        <Bolt color="white" size={24} />
                    </div>
                    <span style={{ fontSize: 20, fontWeight: 700 }}>MoveBreak AI</span>
                </div>
                <button style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid rgba(56, 56, 255, 0.1)', background: 'rgba(56, 56, 255, 0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    <Settings color="var(--text-primary)" size={24} />
                </button>
            </nav>

            {/* Content */}
            <main style={{ textAlign: 'center', zIndex: 1, maxWidth: '900px', width: '100%' }}>
                <div style={{ marginBottom: '48px' }}>
                    <span style={{ padding: '6px 16px', borderRadius: '99px', background: 'rgba(56, 56, 255, 0.1)', color: 'var(--primary)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', border: '1px solid rgba(56, 56, 255, 0.2)' }}>
                        Break in Progress
                    </span>
                    <h1 style={{ fontSize: '64px', fontWeight: 800, marginTop: '16px' }}>Time to Recharge</h1>
                </div>

                {/* Timer */}
                <div style={{ position: 'relative', width: '320px', height: '320px', margin: '0 auto 48px' }}>
                    <svg width="320" height="320" viewBox="0 0 320 320" style={{ transform: 'rotate(-90deg)' }}>
                        <circle cx="160" cy="160" r="140" fill="none" stroke="var(--surface)" strokeWidth="8" />
                        <motion.circle 
                            cx="160" cy="160" r="140" 
                            fill="none" 
                            stroke="var(--primary)" 
                            strokeWidth="8" 
                            strokeDasharray="880" 
                            strokeDashoffset={880 - ( (120 - timeLeft) / 120 ) * 880}
                            strokeLinecap="round" 
                        />
                    </svg>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        <span style={{ fontSize: '96px', fontWeight: 800, display: 'block', lineHeight: 1 }}>{formatTime(timeLeft)}</span>
                        <span style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase' }}>Minutes Left</span>
                    </div>
                </div>

                {/* Tips */}
                <div style={{ marginBottom: '48px' }}>
                    <h3 style={{ textTransform: 'uppercase', fontSize: '12px', letterSpacing: '2px', color: 'var(--text-secondary)', fontWeight: 700, marginBottom: '24px' }}>Focus on your wellbeing</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                        {tips.map((tip, i) => (
                            <div key={i} style={{ 
                                padding: '24px', 
                                background: tip.active ? 'rgba(56, 56, 255, 0.05)' : 'rgba(56, 56, 255, 0.03)', 
                                borderRadius: '16px', 
                                border: tip.active ? '1px solid rgba(56, 56, 255, 0.4)' : '1px solid rgba(56, 56, 255, 0.1)',
                                textAlign: 'center',
                                transition: 'all 0.2s',
                                cursor: 'pointer'
                            }}>
                                <div style={{ 
                                    width: 48, 
                                    height: 48, 
                                    borderRadius: '50%', 
                                    background: tip.active ? 'var(--primary)' : 'rgba(56, 56, 255, 0.1)', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    margin: '0 auto 16px',
                                    color: tip.active ? 'white' : 'var(--primary)',
                                    transform: tip.active ? 'scale(1.1)' : 'scale(1)'
                                }}>
                                    {tip.icon}
                                </div>
                                <h4 style={{ fontWeight: 700, margin: 0 }}>{tip.title}</h4>
                                <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: '4px 0 0' }}>{tip.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Controls */}
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                    <button 
                        onClick={() => navigate('/dashboard')}
                        style={{ padding: '16px 32px', borderRadius: '16px', border: '1px solid rgba(56, 56, 255, 0.1)', background: 'white', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
                    >
                        <SkipForward size={20} /> Finish Early
                    </button>
                    <button 
                        onClick={() => setIsActive(!isActive)}
                        style={{ padding: '16px 40px', borderRadius: '16px', border: 'none', background: 'var(--primary)', color: 'white', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 20px 40px rgba(56, 56, 255, 0.2)' }}
                    >
                        {isActive ? <Pause size={20} /> : <Play size={20} />}
                        {isActive ? 'Pause Break' : 'Resume Break'}
                    </button>
                </div>
            </main>

            <footer style={{ position: 'fixed', bottom: 0, width: '100%', padding: '32px', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 500 }}>
                Next break scheduled in 50 minutes • Keep up the great work!
            </footer>
        </div>
    )
}

export default BreakMode
