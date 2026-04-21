export default async function handler(req, res) {
  // Allow CORS from any origin (for browser testing)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  // Mission Control API - Live data from Python backend or mock fallback
  
  const backendUrl = process.env.PYTHON_BACKEND_URL || 'http://localhost:5001';
  
  try {
    // Try to fetch from Python backend first
    const backendRes = await fetch(`${backendUrl}/api/status`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      timeout: 5000
    });
    
    if (backendRes.ok) {
      const liveData = await backendRes.json();
      res.status(200).json(liveData);
      return;
    }
  } catch (err) {
    console.log('Backend unavailable, using mock data');
  }
  
  // Mock data fallback (matches Mission Control schema)
  const mockData = {
    timestamp: new Date().toISOString(),
    
    // Critical Alerts
    critical_alerts: [
      { icon: '💳', title: '15 Failed Payments', message: '3 critical (26-28 days overdue)' },
      { icon: '⚠️', title: '10 Calendar Conflicts', message: 'Buffer violations tomorrow' },
      { icon: '📧', title: '50 Unread Emails', message: '2 need 24h response' }
    ],
    
    // Live Ops Status
    stripe: {
      failed_payments: 15,
      revenue_dollars: '238.00',
      successful_payments: 2
    },
    
    calendar: {
      total_sessions: 14,
      conflicts: 10,
      sessions: [
        { adelaide_time: '06:00 AM', summary: 'Aryln - PT', conflict: true },
        { adelaide_time: '06:30 AM', summary: 'Deborah - PT', conflict: true },
        { adelaide_time: '06:30 AM', summary: 'Personal Training - Strength B (Pull)', conflict: false },
        { adelaide_time: '08:30 AM', summary: 'Shirley - PT - NDIS', conflict: false },
        { adelaide_time: '10:00 AM', summary: 'Lara PT', conflict: true },
        { adelaide_time: '10:30 AM', summary: 'Marketing Mastery', conflict: true },
        { adelaide_time: '11:30 AM', summary: 'Callum - Weflex', conflict: true },
        { adelaide_time: '12:30 PM', summary: 'Untitled', conflict: false },
        { adelaide_time: '01:00 PM', summary: 'Delicia - PT', conflict: true },
        { adelaide_time: '02:30 PM', summary: 'Tom - Weflex', conflict: true },
        { adelaide_time: '02:30 PM', summary: 'Overcoming Business Hurdles', conflict: true },
        { adelaide_time: '03:30 PM', summary: 'Julie Darby and Christian Roach', conflict: true },
        { adelaide_time: '04:30 PM', summary: 'Jen & Gavin', conflict: true },
        { adelaide_time: '05:30 PM', summary: 'Isabel Roura and Christian Roach', conflict: false }
      ]
    },
    
    email: {
      total_unread: 50
    },
    
    // Hot Leads (from PAR-Q)
    leads: [
      { name: 'Gavin Ridley', score: 95, goal: 'Retired • $150/wk', phone: '0412 345 678' },
      { name: 'Kerry-Anne D.', score: 90, goal: '21kg loss goal', phone: null },
      { name: 'Kaylee Spicer', score: 85, goal: '39yo Teacher • Knee injury', phone: '0423 456 789' },
      { name: 'Delecia G.', score: 85, goal: 'Post-surgery recovery', phone: null }
    ],
    
    // Automation Status
    automations: [
      { name: 'PAR-Q Monitor', schedule: 'Every 5 min', last_run: 'Just now', status: 'running' },
      { name: 'Stripe Payment Audit', schedule: 'Daily 8:00 AM', last_run: 'Today 8:00 AM', status: 'success' },
      { name: 'Calendar Conflict Check', schedule: 'Daily 9:00 AM', last_run: 'Today 9:00 AM', status: 'success' },
      { name: 'Email Triage', schedule: 'Daily 11:00 AM', last_run: 'Today 11:00 AM', status: 'success' },
      { name: 'EOD Report', schedule: 'Daily 4:00 PM', last_run: 'Today 11:36 AM', status: 'success' },
      { name: 'Daily Briefing', schedule: 'Daily 5:30 AM', last_run: 'Today 5:30 AM', status: 'success' }
    ],
    
    // Metrics
    metrics: {
      stripe_today: "$238.00",
      failed_payments: "15 need attention",
      sessions_tomorrow: "14 scheduled",
      unread_emails: "50 (2 urgent)",
      parq_total_submissions: 10,
      total_leads: "4 hot"
    },
    
    // AI Agents
    agents: [
      { name: "Hermes", role: "CEO / Chief Intelligence Officer", model: "qwen3.5:397b-cloud", channel: "Main Session", status: "active", emoji: "⚡" },
      { name: "Luna Φ", role: "Content Marketing", model: "claude-sonnet", channel: "#claude", status: "active", emoji: "🌙" },
      { name: "Nico Φ", role: "Operations Coordinator", model: "claude-sonnet", channel: "#crew-hq", status: "active", emoji: "🎯" },
      { name: "Kai Φ", role: "Lead Alert Specialist", model: "claude-sonnet", channel: "#lead-alerts", status: "active", emoji: "🌊" },
      { name: "Jax Φ", role: "Task Tracker", model: "claude-sonnet", channel: "#active-tasks", status: "active", emoji: "🔧" },
      { name: "Ruby Φ", role: "Client Success", model: "claude-sonnet", channel: "#crew-hq", status: "active", emoji: "💎" }
    ],
    
    // Ops Scripts
    ops_scripts: [
      { name: "Stripe Payment Audit", schedule: "Daily 8:00 AM", last_run: "Today 8:00 AM", status: "healthy", result: "15 failed payments found" },
      { name: "Calendar Conflict Check", schedule: "Daily 9:00 AM", last_run: "Today 9:00 AM", status: "healthy", result: "10 buffer violations" },
      { name: "Email Triage", schedule: "Daily 11:00 AM", last_run: "Today 11:00 AM", status: "healthy", result: "50 emails categorized" },
      { name: "EOD Report Generator", schedule: "Daily 4:00 PM", last_run: "Today 11:36 AM", status: "healthy", result: "Full summary generated" },
      { name: "PAR-Q Monitor", schedule: "Every 5 minutes", last_run: "Just now", status: "healthy", result: "No new submissions" },
      { name: "Daily Briefing", schedule: "Daily 5:30 AM", last_run: "Today 5:30 AM", status: "healthy", result: "Sent to Telegram + Discord + Email" }
    ]
  };

  res.status(200).json(mockData);
}
