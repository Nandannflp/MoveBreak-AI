import React from 'react'
import Sidebar from '../components/Sidebar'
import { Bell, Award, Trophy, Star, Target, Zap, Lock } from 'lucide-react'
import { motion } from 'framer-motion'

const Achievements = () => {
    const badges = [
        { id: 1, title: 'Posture Master', description: 'Maintain perfect alignment for 5 days.', icon: <Target size={32} />, progress: 100, earned: true, color: '#3B82F6' },
        { id: 2, title: 'Consistency King', description: 'Complete 10 deep work sessions.', icon: <Trophy size={32} />, progress: 80, earned: false, color: '#10B981' },
        { id: 3, title: 'Early Bird', description: 'Start a focus session before 8 AM.', icon: <Zap size={32} />, progress: 100, earned: true, color: '#F59E0B' },
        { id: 4, title: 'Break Specialist', description: 'Follow 50 consecutive smart breaks.', icon: <Star size={32} />, progress: 45, earned: false, color: '#EF4444' },
        { id: 5, title: 'Concentrated', description: '4 hours of deep work in one day.', icon: <Award size={32} />, progress: 20, earned: false, color: '#8B5CF6' },
        { id: 6, title: 'Health Warrior', description: 'Reach a health score of 95.', icon: <Shield size={32} />, progress: 0, earned: false, color: '#EC4899' },
    ]

    return (
        <div className="dashboard-layout" style={{ display: 'flex', minHeight: '100vh', background: 'var(--background)' }}>
            <Sidebar />

            <main style={{ flex: 1, padding: '40px 60px', overflowY: 'auto' }}>
                <header style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 4 }}>Awards & Badges</h1>
                        <p style={{ color: 'var(--text-secondary)' }}>Celebrate your health and productivity milestones.</p>
                    </div>
                    <div style={{ padding: '8px 16px', background: 'var(--surface)', borderRadius: '99px', border: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Bell size={18} color="var(--text-secondary)" />
                        <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700 }}>N</div>
                    </div>
                </header>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
                    {badges.map((badge) => (
                        <motion.div 
                            key={badge.id}
                            whileHover={{ y: -4 }}
                            className="card" 
                            style={{ 
                                padding: '32px', 
                                textAlign: 'center', 
                                position: 'relative',
                                opacity: badge.earned ? 1 : 0.7
                            }}
                        >
                            <div style={{ 
                                width: 80, 
                                height: 80, 
                                borderRadius: '50%', 
                                background: badge.earned ? `${badge.color}15` : 'var(--surface)', 
                                margin: '0 auto 24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: badge.earned ? badge.color : 'var(--text-secondary)',
                                transition: 'all 0.3s'
                            }}>
                                {badge.earned ? badge.icon : <Lock size={32} />}
                            </div>
                            
                            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{badge.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginBottom: 24 }}>{badge.description}</p>
                            
                            <div style={{ background: 'var(--surface)', height: 8, borderRadius: 4, overflow: 'hidden' }}>
                                <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: `${badge.progress}%` }}
                                    transition={{ duration: 1, ease: 'easeOut' }}
                                    style={{ height: '100%', background: badge.earned ? badge.color : 'var(--text-secondary)', opacity: 0.5 }}
                                />
                            </div>
                            <div style={{ marginTop: 8, fontSize: 12, fontWeight: 700, color: 'var(--text-secondary)', textAlign: 'right' }}>
                                {badge.progress}%
                            </div>

                            {badge.earned && (
                                <div style={{ 
                                    position: 'absolute', 
                                    top: 16, 
                                    right: 16, 
                                    background: 'var(--success)', 
                                    color: 'white', 
                                    padding: '4px 8px', 
                                    borderRadius: '6px', 
                                    fontSize: 10, 
                                    fontWeight: 800 
                                }}>
                                    UNLOCKED
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default Achievements
