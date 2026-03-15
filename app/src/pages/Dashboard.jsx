import React from 'react'
import { Activity, Bell, TrendingUp, ChevronRight } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import StatCard from '../components/StatCard'

const Dashboard = () => {
    return (
        <div className="dashboard-layout" style={{ display: 'flex', minHeight: '100vh', background: 'var(--background)' }}>
            <Sidebar />

            {/* Main Content */}
            <main style={{ flex: 1, padding: '40px 60px', overflowY: 'auto' }}>
                <header style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 4 }}>Welcome back, Nandakumar!</h1>
                        <p style={{ color: 'var(--text-secondary)' }}>You've had a productive morning. Time for a quick stretch?</p>
                    </div>
                    <div style={{ padding: '8px 16px', background: 'var(--surface)', borderRadius: '99px', border: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Bell size={18} color="var(--text-secondary)" />
                        <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700 }}>N</div>
                    </div>
                </header>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '40px' }}>
                    <StatCard 
                        title="Breaks Taken" 
                        value="6" 
                        trend="+2 from yesterday"
                        icon={<Activity color="var(--primary)" />}
                    />
                    <StatCard 
                        title="Active Time" 
                        value="4h 12m" 
                        trend="Normal range"
                        icon={<Activity color="var(--success)" />}
                    />
                    <StatCard 
                        title="Posture Score" 
                        value="88" 
                        trend="Excellent"
                        icon={<Activity color="var(--primary-dark)" />}
                    />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
                    {/* Health Score Ring Card */}
                    <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '48px' }}>
                        <div style={{ position: 'relative', width: '220px', height: '220px' }}>
                            <svg width="220" height="220" viewBox="0 0 220 220">
                                <circle cx="110" cy="110" r="100" fill="none" stroke="var(--surface)" strokeWidth="15" />
                                <circle cx="110" cy="110" r="100" fill="none" stroke="var(--primary)" strokeWidth="15" strokeDasharray="628" strokeDashoffset="125" strokeLinecap="round" />
                            </svg>
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                                <span style={{ fontSize: 48, fontWeight: 800, display: 'block' }}>82</span>
                                <span style={{ fontSize: 14, color: 'var(--text-secondary)', fontWeight: 600 }}>Health Score</span>
                            </div>
                        </div>
                        <div style={{ maxWidth: '300px' }}>
                            <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 16 }}>Looking Good!</h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>Your overall health score is trending upwards this week. Keep maintaining that posture!</p>
                            <button className="btn-primary" onClick={() => window.location.href='/break'}>Start Active Break</button>
                        </div>
                    </div>

                    {/* AI Insights Card */}
                    <div className="card" style={{ background: 'var(--primary)', color: 'white' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: 20 }}>
                            <TrendingUp size={24} />
                            <h3 style={{ fontSize: 20, fontWeight: 700 }}>AI Coach</h3>
                        </div>
                        <p style={{ fontSize: 16, lineHeight: 1.6, opacity: 0.9, marginBottom: 24 }}>
                            "You've been sitting for 45 minutes straight. Based on your stress levels, now would be a perfect time for a 5-minute eye-relief exercise."
                        </p>
                        <button 
                            onClick={() => window.location.href='/break'}
                            style={{ width: '100%', padding: '12px', borderRadius: '12px', border: 'none', background: 'rgba(255,255,255,0.2)', color: 'white', fontWeight: 700, cursor: 'pointer' }}
                        >
                            Start Exercise
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Dashboard
