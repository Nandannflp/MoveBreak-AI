import React from 'react'
import Sidebar from '../components/Sidebar'
import StatCard from '../components/StatCard'
import { Bell, Shield, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const Posture = () => {
    return (
        <div className="dashboard-layout" style={{ display: 'flex', minHeight: '100vh', background: 'var(--background)' }}>
            <Sidebar />

            <main style={{ flex: 1, padding: '40px 60px', overflowY: 'auto' }}>
                <header style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 4 }}>Posture Guard</h1>
                        <p style={{ color: 'var(--text-secondary)' }}>Real-time AI monitoring for your cervical and spinal health.</p>
                    </div>
                    <div style={{ padding: '8px 16px', background: 'var(--surface)', borderRadius: '99px', border: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Bell size={18} color="var(--text-secondary)" />
                        <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700 }}>N</div>
                    </div>
                </header>

                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '32px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        {/* Avatar Visual Mock */}
                        <div className="card" style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(180deg, #F9FAFB 0%, #F3F4F6 100%)' }}>
                            <div style={{ position: 'relative', textAlign: 'center' }}>
                                <motion.div 
                                    animate={{ scale: [1, 1.02, 1] }} 
                                    transition={{ duration: 3, repeat: Infinity }}
                                    style={{ fontSize: 120 }}
                                >
                                    🧘‍♂️
                                </motion.div>
                                <div style={{ 
                                    position: 'absolute', 
                                    top: '40px', 
                                    right: '-60px', 
                                    padding: '12px 20px', 
                                    background: 'var(--success)', 
                                    color: 'white', 
                                    borderRadius: '16px', 
                                    fontWeight: 700,
                                    boxShadow: '0 8px 16px rgba(16, 185, 129, 0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}>
                                    <CheckCircle size={18} /> Perfect Alignment
                                </div>
                            </div>
                        </div>

                        {/* Weekly Analytics Chart Placeholder */}
                        <div className="card">
                            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 24 }}>Weekly Alignment Review</h3>
                            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '200px', paddingBottom: '24px' }}>
                                {[70, 85, 90, 65, 80, 95, 88].map((h, i) => (
                                    <div key={i} style={{ width: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <div style={{ 
                                            width: '100%', 
                                            height: `${h}%`, 
                                            background: h > 80 ? 'var(--primary)' : 'var(--primary-light)', 
                                            borderRadius: '8px',
                                            transition: 'height 1s ease-in-out'
                                        }}></div>
                                        <span style={{ marginTop: 8, fontSize: 12, color: 'var(--text-secondary)' }}>{['M','T','W','T','F','S','S'][i]}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <StatCard 
                            title="Current Alignment" 
                            value="94%" 
                            trend="Superior"
                            icon={<Shield color="var(--success)" />}
                        />
                        <StatCard 
                            title="Slouch Alerts" 
                            value="2" 
                            trend="Low usage"
                            icon={<AlertTriangle color="var(--warning)" />}
                        />
                        
                        <div className="card" style={{ background: 'var(--surface)', border: '1px dashed var(--primary)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: 16 }}>
                                <TrendingUp size={20} color="var(--primary)" />
                                <h4 style={{ fontWeight: 700 }}>Posture Trends</h4>
                            </div>
                            <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>
                                You slouched the most during your 2 PM session. Consider scheduling a break then tomorrow.
                            </p>
                        </div>

                        <div className="card" style={{ background: 'var(--primary)', color: 'white', padding: '32px' }}>
                            <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 16 }}>Calibration</h3>
                            <p style={{ marginBottom: 24, opacity: 0.9 }}>Recalibrate your standard alignment for more accurate tracking.</p>
                            <button className="btn-primary" style={{ background: 'white', color: 'var(--primary)', width: '100%' }}>
                                Start Calibration
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Posture
