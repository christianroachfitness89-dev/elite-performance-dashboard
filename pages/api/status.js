export default async function handler(req, res) {
  // For Vercel deployment, we'll use mock data since Python backend isn't available
  // In production, you'd connect this to your running Python backend
  
  const mockData = {
    timestamp: new Date().toISOString(),
    cron_count: 6,
    metrics: {
      stripe_today: "$119.00",
      failed_payments: "15 need attention",
      sessions_tomorrow: "12 scheduled",
      unread_emails: "50 (1 urgent)",
      parq_total_submissions: 10,
      total_leads: "Active"
    },
    agents: [
      { name: "Hermes", role: "CEO / Chief Intelligence Officer", model: "qwen3.5:397b-cloud", channel: "Main Session", status: "active", emoji: "⚡" },
      { name: "Luna Φ", role: "Content Marketing", model: "claude-sonnet", channel: "#claude", status: "active", emoji: "🌙" },
      { name: "Nico Φ", role: "Operations Coordinator", model: "claude-sonnet", channel: "#crew-hq", status: "active", emoji: "🎯" },
      { name: "Kai Φ", role: "Lead Alert Specialist", model: "claude-sonnet", channel: "#lead-alerts", status: "active", emoji: "🌊" },
      { name: "Jax Φ", role: "Task Tracker", model: "claude-sonnet", channel: "#active-tasks", status: "active", emoji: "🔧" },
      { name: "Mark Φ", role: "Code/Development", model: "claude-sonnet", channel: "#cursor", status: "active", emoji: "📝" },
      { name: "Ruby Φ", role: "Client Success", model: "claude-sonnet", channel: "#crew-hq", status: "active", emoji: "💎" },
      { name: "Maya Φ", role: "(Reserved)", model: "claude-sonnet", channel: "-", status: "standby", emoji: "🌸" },
      { name: "Liam Φ", role: "(Reserved)", model: "claude-sonnet", channel: "-", status: "standby", emoji: "🦁" },
      { name: "Ella Φ", role: "(Reserved)", model: "claude-sonnet", channel: "-", status: "standby", emoji: "🦋" },
      { name: "Jude Φ", role: "(Reserved)", model: "claude-sonnet", channel: "-", status: "standby", emoji: "✡️" }
    ],
    ops_scripts: [
      { name: "Stripe Payment Audit", schedule: "Daily 8:00 AM", last_run: "Today 4:45 AM", status: "healthy", result: "15 failed payments found" },
      { name: "Calendar Conflict Check", schedule: "Daily 9:00 AM", last_run: "Today 4:51 AM", status: "healthy", result: "8 buffer violations" },
      { name: "Email Triage", schedule: "Daily 11:00 AM", last_run: "Today 4:51 AM", status: "healthy", result: "50 emails categorized" },
      { name: "EOD Report Generator", schedule: "Daily 4:00 PM", last_run: "Today 4:52 AM", status: "healthy", result: "Full summary generated" },
      { name: "PAR-Q Monitor", schedule: "Every 5 minutes", last_run: "Today 4:34 AM", status: "healthy", result: "No new submissions" },
      { name: "Daily Briefing", schedule: "Daily 5:30 AM", last_run: "Today 4:35 AM", status: "healthy", result: "Sent to Telegram + Discord + Email" }
    ]
  };

  // In production, fetch from your Python backend:
  // const backendUrl = process.env.PYTHON_BACKEND_URL || 'http://localhost:5001';
  // const res = await fetch(`${backendUrl}/api/status`);
  // const data = await res.json();

  res.status(200).json(mockData);
}
