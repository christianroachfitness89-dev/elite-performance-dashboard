import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function MissionControl() {
  const [status, setStatus] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/status');
        const data = await res.json();
        setStatus(data);
        setLastUpdate(new Date());
      } catch (err) {
        console.error('Failed to fetch status:', err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!status) {
    return (
      <div className="min-h-screen bg-brand-deep flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full border-4 border-brand-red-primary/30 border-t-brand-red-bright animate-spin mx-auto mb-4"></div>
          <p className="text-brand-text-secondary">Initializing Mission Control...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Mission Control | Elite Performance AI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-animated relative overflow-hidden">
        <div className="bg-grain"></div>
        
        {/* Top Header Bar */}
        <header className="relative z-10 border-b border-brand-red-primary/10 bg-brand-deep/80 backdrop-blur-xl">
          <div className="container mx-auto px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-red-primary to-brand-red-bright flex items-center justify-center glow-medium">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h1 className="text-3xl font-display tracking-wide text-gradient">MISSION CONTROL</h1>
                  <p className="text-brand-text-secondary text-xs font-medium">Elite Performance AI • Live Operations</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 card-elite py-2 px-4">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span className="text-green-500 text-xs font-bold tracking-wide">SYSTEMS ONLINE</span>
                </div>
                <div className="text-brand-text-muted text-xs font-mono">
                  {lastUpdate ? `LAST SYNC: ${lastUpdate.toLocaleTimeString('en-AU', { timeZone: 'Australia/Adelaide' })} ACDT` : 'LOADING...'}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Grid Layout - Desktop First */}
        <main className="relative z-10 container mx-auto px-8 py-6">
          
          {/* ROW 1: Critical Alerts (Full Width) */}
          {status.critical_alerts && status.critical_alerts.length > 0 && (
            <div className="mb-6">
              <div className="p-5 bg-red-500/10 border border-red-500/30 rounded-xl backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🚨</span>
                  <h2 className="text-lg font-display text-red-400 tracking-wide">CRITICAL ALERTS</h2>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {status.critical_alerts.map((alert, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                      <span className="text-3xl">{alert.icon}</span>
                      <div>
                        <p className="text-red-300 text-sm font-bold">{alert.title}</p>
                        <p className="text-red-400/70 text-xs">{alert.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ROW 2: Live Metrics (5 columns) */}
          <div className="grid grid-cols-5 gap-4 mb-6">
            {/* PAR-Q Monitor */}
            <div className="card-elite">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">📋</span>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
              </div>
              <p className="text-brand-text-muted text-xs uppercase tracking-widest font-bold">PAR-Q Monitor</p>
              <p className="text-3xl font-display text-brand-text-primary mt-2">ACTIVE</p>
              <p className="text-brand-text-secondary text-xs mt-3 font-mono">Every 5 min</p>
            </div>

            {/* Revenue Today */}
            <div className="card-elite">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">💰</span>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
              </div>
              <p className="text-brand-text-muted text-xs uppercase tracking-widest font-bold">Revenue Today</p>
              <p className="text-3xl font-display text-green-500 mt-2">${status.stripe?.revenue_dollars || '0.00'}</p>
              <p className="text-brand-text-secondary text-xs mt-3 font-mono">{status.stripe?.successful_payments || 0} successful</p>
            </div>

            {/* Failed Payments */}
            <div className="card-elite">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">💳</span>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-500"></span>
                </span>
              </div>
              <p className="text-brand-text-muted text-xs uppercase tracking-widest font-bold">Failed Payments</p>
              <p className="text-3xl font-display text-yellow-500 mt-2">{status.stripe?.failed_payments || 0}</p>
              <p className="text-brand-text-secondary text-xs mt-3 font-mono">Need recovery</p>
            </div>

            {/* Tomorrow's Sessions */}
            <div className="card-elite">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">📅</span>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                </span>
              </div>
              <p className="text-brand-text-muted text-xs uppercase tracking-widest font-bold">Tomorrow</p>
              <p className="text-3xl font-display text-brand-text-primary mt-2">{status.calendar?.total_sessions || 0}</p>
              <p className="text-brand-text-secondary text-xs mt-3 font-mono">{status.calendar?.conflicts || 0} conflicts</p>
            </div>

            {/* Unread Emails */}
            <div className="card-elite">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">📧</span>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-text-muted"></span>
                </span>
              </div>
              <p className="text-brand-text-muted text-xs uppercase tracking-widest font-bold">Inbox</p>
              <p className="text-3xl font-display text-brand-text-primary mt-2">{status.email?.total_unread || 0}</p>
              <p className="text-brand-text-secondary text-xs mt-3 font-mono">Unread</p>
            </div>
          </div>

          {/* ROW 3: Main Content (2 columns - 60/40 split) */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            
            {/* LEFT: Tomorrow's Schedule (2/3 width) */}
            <div className="col-span-2 card-elite">
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-brand-red-primary/10">
                <div>
                  <h3 className="text-xl font-display text-brand-text-primary tracking-wide">📅 TOMORROW'S SCHEDULE</h3>
                  <p className="text-brand-text-secondary text-xs mt-1 font-mono">{status.calendar?.total_sessions || 0} SESSIONS • 5 AM - 9 PM ACDT</p>
                </div>
                <div className="text-right">
                  <span className="text-yellow-500 text-sm font-bold">{status.calendar?.conflicts || 0} CONFLICTS</span>
                </div>
              </div>
              
              <div className="space-y-2">
                {status.calendar?.sessions && status.calendar.sessions.length > 0 ? (
                  status.calendar.sessions.map((session, idx) => (
                    <div key={idx} className={`flex items-center gap-4 p-3 rounded-lg border transition-all ${
                      session.conflict 
                        ? 'bg-yellow-500/5 border-yellow-500/20' 
                        : 'bg-brand-elevated/30 border-brand-red-primary/5'
                    }`}>
                      <div className="w-24 text-brand-red-bright font-display text-sm font-mono">{session.adelaide_time}</div>
                      <div className="flex-1">
                        <p className="text-brand-text-primary text-sm font-medium">{session.summary}</p>
                      </div>
                      {session.conflict && (
                        <span className="text-xs bg-yellow-500/20 text-yellow-500 px-3 py-1 rounded font-bold">⚠️ BUFFER</span>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-brand-text-muted text-sm text-center py-8">No sessions scheduled</p>
                )}
              </div>
            </div>

            {/* RIGHT: Hot Leads (1/3 width) */}
            <div className="card-elite">
              <div className="mb-5 pb-4 border-b border-brand-red-primary/10">
                <h3 className="text-xl font-display text-brand-text-primary tracking-wide">🔥 HOT LEADS</h3>
                <p className="text-brand-text-secondary text-xs mt-1 font-mono">READY TO CONVERT</p>
              </div>
              
              <div className="space-y-3">
                {status.leads && status.leads.length > 0 ? (
                  status.leads.slice(0, 5).map((lead, idx) => (
                    <div key={idx} className="p-4 bg-brand-elevated/30 rounded-lg border border-brand-red-primary/10 hover:border-brand-red-primary/30 transition-all cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-brand-text-primary font-bold text-sm">{lead.name}</p>
                        <span className={`text-xs font-bold px-2 py-1 rounded ${
                          lead.score >= 90 ? 'bg-red-500/20 text-red-400' :
                          lead.score >= 70 ? 'bg-orange-500/20 text-orange-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>{lead.score}</span>
                      </div>
                      <p className="text-brand-text-secondary text-xs mb-2">{lead.goal}</p>
                      {lead.phone && (
                        <p className="text-brand-text-muted text-xs font-mono">📞 {lead.phone}</p>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-brand-text-muted text-sm text-center py-8">No hot leads</p>
                )}
              </div>
            </div>
          </div>

          {/* ROW 4: Automation Status & Quick Actions (2 columns) */}
          <div className="grid grid-cols-2 gap-6">
            
            {/* Automation Status */}
            <div className="card-elite">
              <div className="mb-5 pb-4 border-b border-brand-red-primary/10">
                <h3 className="text-xl font-display text-brand-text-primary tracking-wide">⚙️ AUTOMATION STATUS</h3>
                <p className="text-brand-text-secondary text-xs mt-1 font-mono">SCHEDULED TASKS</p>
              </div>
              
              <div className="space-y-3">
                {status.automations && status.automations.map((auto, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-brand-elevated/30 rounded-lg border border-brand-red-primary/5">
                    <div className="flex items-center gap-3">
                      <span className={`h-2.5 w-2.5 rounded-full ${
                        auto.status === 'running' ? 'bg-green-500 animate-pulse' :
                        auto.status === 'warning' ? 'bg-yellow-500' :
                        auto.status === 'success' ? 'bg-green-500' :
                        'bg-brand-text-muted'
                      }`}></span>
                      <span className="text-brand-text-primary text-sm font-bold">{auto.name}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-brand-text-secondary text-xs font-mono">{auto.schedule}</p>
                      <p className="text-brand-text-muted text-xs font-mono">LAST: {auto.last_run}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card-elite">
              <div className="mb-5 pb-4 border-b border-brand-red-primary/10">
                <h3 className="text-xl font-display text-brand-text-primary tracking-wide">⚡ QUICK ACTIONS</h3>
                <p className="text-brand-text-secondary text-xs mt-1 font-mono">EXECUTE OPERATIONS</p>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <button className="p-5 bg-brand-elevated/50 rounded-xl border border-brand-red-primary/10 hover:border-brand-red-primary/40 transition-all text-left group">
                  <span className="text-2xl mb-3 block group-hover:scale-110 transition-transform">📧</span>
                  <span className="text-brand-text-primary text-sm font-bold block">Email Triage</span>
                  <span className="text-brand-text-muted text-xs font-mono">Categorize inbox</span>
                </button>
                <button className="p-5 bg-brand-elevated/50 rounded-xl border border-brand-red-primary/10 hover:border-brand-red-primary/40 transition-all text-left group">
                  <span className="text-2xl mb-3 block group-hover:scale-110 transition-transform">💳</span>
                  <span className="text-brand-text-primary text-sm font-bold block">Payment Audit</span>
                  <span className="text-brand-text-muted text-xs font-mono">Check failed</span>
                </button>
                <button className="p-5 bg-brand-elevated/50 rounded-xl border border-brand-red-primary/10 hover:border-brand-red-primary/40 transition-all text-left group">
                  <span className="text-2xl mb-3 block group-hover:scale-110 transition-transform">📋</span>
                  <span className="text-brand-text-primary text-sm font-bold block">PAR-Q Check</span>
                  <span className="text-brand-text-muted text-xs font-mono">Scan new leads</span>
                </button>
                <button className="p-5 bg-brand-elevated/50 rounded-xl border border-brand-red-primary/10 hover:border-brand-red-primary/40 transition-all text-left group">
                  <span className="text-2xl mb-3 block group-hover:scale-110 transition-transform">📊</span>
                  <span className="text-brand-text-primary text-sm font-bold block">EOD Report</span>
                  <span className="text-brand-text-muted text-xs font-mono">Generate summary</span>
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 border-t border-brand-red-primary/10 py-4 bg-brand-deep/80 backdrop-blur-xl mt-8">
          <div className="container mx-auto px-8 text-center">
            <p className="text-brand-text-secondary text-xs font-mono">ELITE PERFORMANCE AI • MISSION CONTROL</p>
            <p className="text-brand-text-muted text-xs mt-1 font-mono">POWERED BY OPENCLAW ⚡</p>
          </div>
        </footer>
      </div>
    </>
  );
}
