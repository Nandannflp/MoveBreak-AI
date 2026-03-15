import React from 'react'

const StatCard = ({ title, value, trend, icon }) => (
    <div className="card" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
            <div style={{ padding: '12px', background: 'var(--background)', borderRadius: '12px' }}>{icon}</div>
            <span style={{ fontSize: 12, color: 'var(--success)', fontWeight: 700, background: 'rgba(16, 185, 129, 0.1)', padding: '4px 8px', borderRadius: '4px' }}>{trend}</span>
        </div>
        <h4 style={{ fontSize: 14, color: 'var(--text-secondary)', fontWeight: 600, marginBottom: 4 }}>{title}</h4>
        <span style={{ fontSize: 28, fontWeight: 800 }}>{value}</span>
    </div>
)

export default StatCard
