import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import { Bell, Play, Pause, RotateCcw, Timer } from 'lucide-react'
import { motion } from 'framer-motion'

const Focus = () => {
    const [timeLeft, setTimeLeft] = useState(45 * 60)
    const [isActive, setIsActive] = useState(false)
    const [sessionGoal, setSessionGoal] = useState(45)

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

    const progress = (timeLeft / (sessionGoal * 60)) * 628

    return (
        <div className="dashboard-layout" style={{ display: 'flex', minHeight: '100vh', background: 'var(--background)' }}>
            <Sidebar />

            <main style={{ flex: 1, padding: '40px 60px', overflowY: 'auto' }}>
                <header style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 4 }}>Deep Work Protocol</h1>
                        <p style={{ color: 'var(--text-secondary)' }}>Maximize your focus with science-backed intervals.</p>
                    </div>
                    <div style={{ padding: '8px 16px', background: 'var(--surface)', borderRadius: '99px', border: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Bell size={18} color="var(--text-secondary)" />
                        <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700 }}>N</div>
                    </div>
                </header>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '48px', paddingTop: '40px' }}>
                    {/* Timer View */}
                    <div style={{ position: 'relative', width: '320px', height: '320px' }}>
                        <svg width="320" height="320" viewBox="0 0 320 320">
                            <circle cx="160" cy="160" r="150" fill="none" stroke="var(--surface)" strokeWidth="10" />
                            <motion.circle 
                                cx="160" cy="160" r="150" 
                                fill="none" 
                                stroke="var(--primary)" 
                                strokeWidth="10" 
                                strokeDasharray="942" 
                                strokeDashoffset={942 - (progress * 1.5)} 
                                strokeLinecap="round" 
                                transform="rotate(-90 160 160)"
                            />
                        </svg>
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                            <span style={{ fontSize: 72, fontWeight: 800, color: 'var(--text-primary)', display: 'block', letterSpacing: '-2px' }}>
                                {formatTime(timeLeft)}
                            </span>
                            <span style={{ fontSize: 16, color: 'var(--text-secondary)', fontWeight: 600 }}>Stay Focused</span>
                        </div>
                    </div>

                    {/* Controls */}
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <button 
                            className="btn-primary" 
                            style={{ padding: '16px 40px', fontSize: 18, borderRadius: '16px', minWidth: '160px' }}
                            onClick={() => setIsActive(!isActive)}
                        >
                            {isActive ? <Pause size={24} style={{ marginRight: 8 }} /> : <Play size={24} style={{ marginRight: 8 }} />}
                            {isActive ? 'Pause' : 'Start'}
                        </button>
                        <button 
                            className="btn-outline" 
                            style={{ 
                                padding: '16px 20px', 
                                background: 'white', 
                                border: '1px solid rgba(0,0,0,0.1)', 
                                borderRadius: '16px',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                            onClick={() => {
                                setIsActive(false)
                                setTimeLeft(sessionGoal * 60)
                            }}
                        >
                            <RotateCcw size={24} color="var(--text-secondary)" />
                        </button>
                    </div>

                    {/* Stats Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', width: '100%', maxWidth: '500px' }}>
                        <div className="card" style={{ textAlign: 'center' }}>
                            <span style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Goal</span>
                            <h4 style={{ fontSize: 24, fontWeight: 700 }}>{sessionGoal}m</h4>
                        </div>
                        <div className="card" style={{ textAlign: 'center' }}>
                            <span style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Sessions</span>
                            <h4 style={{ fontSize: 24, fontWeight: 700 }}>3/4</h4>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Focus
