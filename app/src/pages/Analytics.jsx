import React from 'react'
import Sidebar from '../components/Sidebar'
import StatCard from '../components/StatCard'
import { Bell, Activity, Eye, Droplets, TrendingUp, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

const Analytics = () => {
    return (
        <div className="dashboard-layout" style={{ display: 'flex', minHeight: '100vh', background: 'var(--background)' }}>
            <Sidebar />

            <main style={{ flex: 1, padding: '40px 60px', overflowY: 'auto' }}>
                <header style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 4 }}>Health Analytics</h1>
                        <p style={{ color: 'var(--text-secondary)' }}>Deep dive into your physiological and productivity trends.</p>
                    </div>
                    <div style={{ padding: '8px 16px', background: 'var(--surface)', borderRadius: '99px', border: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Bell size={18} color="var(--text-secondary)" />
                        <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700 }}>N</div>
                    </div>
                </header>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '40px' }}>
                    <StatCard 
                        title="Avg. Health Score" 
                        value="84" 
                        trend="+4% this week"
                        icon={<Activity color="var(--primary)" />}
                    />
                    <StatCard 
                        title="Eye Relief" 
                        value="92%" 
                        trend="On target"
                        icon={<Eye color="var(--success)" />}
                    />
                    <StatCard 
                        title="Hydration" 
                        value="2.4L" 
                        trend="Daily goal: 3L"
                        icon={<Droplets color="#0EA5E9" />}
                    />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
                    {/* Main Health Trend Chart Placeholder */}
                    <div className="card" style={{ minHeight: '400px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
                            <h3 style={{ fontSize: 20, fontWeight: 700 }}>Health Evolution</h3>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <button style={{ padding: '6px 12px', borderRadius: '8px', border: 'none', background: 'var(--primary)', color: 'white', fontWeight: 600, fontSize: 12 }}>Daily</button>
                                <button style={{ padding: '6px 12px', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.05)', background: 'white', fontWeight: 600, fontSize: 12 }}>Weekly</button>
                            </div>
                        </div>
                        
                        <div style={{ height: '280px', width: '100%', display: 'flex', alignItems: 'flex-end', gap: '16px', paddingBottom: '20px', position: 'relative' }}>
                            {/* Simple Line Graph Simulation */}
                            <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} preserveAspectRatio="none">
                                <motion.path 
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 2, ease: 'easeInOut' }}
                                    d="M0,200 L100,180 L200,150 L300,190 L400,100 L500,120 L600,80 L700,50" 
                                    fill="none" 
                                    stroke="var(--primary)" 
                                    strokeWidth="4" 
                                    strokeLinecap="round"
                                />
                                <path d="M0,200 L100,180 L200,150 L300,190 L400,100 L500,120 L600,80 L700,50 L700,280 L0,280 Z" fill="url(#gradient)" opacity="0.1" />
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="var(--primary)" />
                                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                                    <span key={day} style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 600 }}>{day}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Productivity Heatmap Placeholder */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        <div className="card">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: 20 }}>
                                <Calendar size={20} color="var(--primary)" />
                                <h3 style={{ fontSize: 18, fontWeight: 700 }}>Focus Intensity</h3>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px' }}>
                                {Array.from({ length: 28 }).map((_, i) => (
                                    <div key={i} style={{ 
                                        width: '100%', 
                                        paddingBottom: '100%', 
                                        background: i % 4 === 0 ? 'var(--primary)' : (i % 3 === 0 ? 'var(--primary-light)' : 'var(--surface)'),
                                        borderRadius: '4px',
                                        opacity: 0.3 + (Math.random() * 0.7)
                                    }} />
                                ))}
                            </div>
                            <p style={{ marginTop: 16, fontSize: 12, color: 'var(--text-secondary)', textAlign: 'center' }}>Weekly focus heatmap based on sensor data.</p>
                        </div>

                        <div className="card" style={{ background: 'var(--primary)', color: 'white' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: 16 }}>
                                <TrendingUp size={20} />
                                <h4 style={{ fontWeight: 700 }}>AI Performance Tip</h4>
                            </div>
                            <p style={{ fontSize: 14, opacity: 0.9, lineHeight: 1.6 }}>
                                "Your focus peak is between 9 AM and 11 AM. Shifting your complex tasks to this window could improve outcome quality by 20%."
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Analytics
