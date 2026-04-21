import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function MissionControl() {
  const [status, setStatus] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  // Auto-refresh every 60 seconds
  useEffect(() => {
    const fetchData = async () => {
      setRefreshing(true);
      try {
        const res = await fetch('/api/status');
        const data = await res.json();
        setStatus(data);
        setLastUpdate(new Date());
      } catch (err) {
        console.error('Failed to fetch status:', err);
      }
      setRefreshing(false);
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

      <div className="min-h-screen bg-animated relative">
        <div className="bg-grain"></div>
        
        {/* Ambient Glow Effects */}
        <div className="fixed top-0 left-1/4 w-96 h-96 bg-brand-red-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-brand-red-bright/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Top Bar - Status Header */}
        <header className="relative z-10 border-b border-brand-red-primary/10 bg-brand-deep/50 backdrop-blur-xl sticky top-0">
          <div className="container mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-red-primary to-brand-red-bright flex items-center justify-center glow-medium">
                  <span className="text-xl">⚡</span>
                </div>
                <div>
                  <h1 className="text-2xl font-display tracking-wide text-gradient">MISSION CONTROL</h1>
                  <p className="text-brand-text-secondary text-xs font-medium">Elite Performance AI • Live Operations</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                {/* Live Status Indicator */}
                <div className="hidden md:flex items-center gap-2 card-elite py-2 px-4">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span className="text-green-500 text-xs font-semibold">SYSTEMS ONLINE</span>
                </div>
                
                {/* Last Updated */}
                <div className="text-brand-text-muted text-xs">
                  {lastUpdate ? `Updated: ${lastUpdate.toLocaleTimeString()}` : 'Loading...'}
                </div>
                
                {/* Refresh Button */}
                <button 
                  onClick={() => window.location.reload()}
                  className={`btn-elite py-2 px-4 text-xs flex items-center gap-2 ${refreshing ? 'opacity-50' : ''}`}
                >
                  <svg className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Refresh
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10 container mx-auto px-6 py-6">
          
          {/* CRITICAL ALERTS BAR */}
          {status.critical_alerts && status.critical_alerts.length > 0 && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🚨</span>
                <h2 className="text-lg font-display text-red-400">CRITICAL ALERTS</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {status.critical_alerts.map((alert, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                    <span className="text-xl">{alert.icon}</span>
                    <div>
                      <p className="text-red-300 text-sm font-semibold">{alert.title}</p>
                      <p className="text-red-400/70 text-xs">{alert.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* LIVE OPS STATUS GRID */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
            {/* PAR-Q Monitor */}
            <div className="card-elite">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">📋</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
              </div>
              <p className="text-brand-text-muted text-xs uppercase tracking-wider font-semibold">PAR-Q Monitor</p>
              <p className="text-2xl font-display text-brand-text-primary mt-1">Running</p>
              <p className="text-brand-text-secondary text-xs mt-2">Every 5 min</p>
            </div>

            {/* Stripe Audit */}
            <div className="card-elite">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">💳</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                </span>
              </div>
              <p className="text-brand-text-muted text-xs uppercase tracking-wider font-semibold">Failed Payments</p>
              <p className="text-2xl font-display text-yellow-500 mt-1">{status.stripe?.failed_payments || 0}</p>
              <p className="text-brand-text-secondary text-xs mt-2">Need recovery</p>
            </div>

            {/* Calendar */}
            <div className="card-elite">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">📅</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
              </div>
              <p className="text-brand-text-muted text-xs uppercase tracking-wider font-semibold">Tomorrow's Sessions</p>
              <p className="text-2xl font-display text-brand-text-primary mt-1">{status.calendar?.total_sessions || 0}</p>
              <p className="text-brand-text-secondary text-xs mt-2">{status.calendar?.conflicts || 0} conflicts</p>
            </div>

            {/* Email Triage */}
            <div className="card-elite">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">📧</span>
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-text-muted"></span>
                </span>
              </div>
              <p className="text-brand-text-muted text-xs uppercase tracking-wider font-semibold">Unread Emails</p>
              <p className="text-2xl font-display text-brand-text-primary mt-1">{status.email?.total_unread || 0}</p>
              <p className="text-brand-text-secondary text-xs mt-2">Inbox</p>
            </div>

            {/* Revenue Today */}
            <div className="card-elite">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">💰</span>
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
              </div>
              <p className="text-brand-text-muted text-xs uppercase tracking-wider font-semibold">Revenue Today</p>
              <p className="text-2xl font-display text-green-500 mt-1">${status.stripe?.revenue_dollars || '0.00'}</p>
              <p className="text-brand-text-secondary text-xs mt-2">{status.stripe?.successful_payments || 0} successful</p>
            </div>
          </div>

          {/* MAIN GRID - 3 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            
            {/* LEFT - TODAY'S SCHEDULE */}
            <div className="lg:col-span-2 card-elite">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-xl font-display text-brand-text-primary tracking-wide">📅 TOMORROW'S SCHEDULE</h3>
                  <p className="text-brand-text-secondary text-xs mt-0.5">{status.calendar?.total_sessions || 0} sessions • 5 AM - 9 PM Adelaide</p>
                </div>
                <span className="text-brand-text-muted text-xs">{status.calendar?.conflicts || 0} ⚠️ conflicts</span>
              </div>
              
              <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
                {status.calendar?.sessions && status.calendar.sessions.length > 0 ? (
                  status.calendar.sessions.map((session, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-3 bg-brand-elevated/30 rounded-lg border border-brand-red-primary/5 hover:border-brand-red-primary/20 transition-all">
                      <div className="text-brand-red-bright font-display text-sm min-w-[80px]">{session.adelaide_time}</div>
                      <div className="flex-1">
                        <p className="text-brand-text-primary text-sm font-medium">{session.summary}</p>
                      </div>
                      {session.conflict && (
                        <span className="text-xs bg-yellow-500/20 text-yellow-500 px-2 py-1 rounded">⚠️ Buffer</span>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-brand-text-muted text-sm text-center py-8">No sessions scheduled</p>
                )}
              </div>
            </div>

            {/* RIGHT - HOT LEADS */}
            <div className="card-elite">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-xl font-display text-brand-text-primary tracking-wide">🔥 HOT LEADS</h3>
                  <p className="text-brand-text-secondary text-xs mt-0.5">Ready to convert</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {status.leads && status.leads.length > 0 ? (
                  status.leads.slice(0, 5).map((lead, idx) => (
                    <div key={idx} className="p-3 bg-brand-elevated/30 rounded-lg border border-brand-red-primary/10 hover:border-brand-red-primary/30 transition-all cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-brand-text-primary font-semibold text-sm">{lead.name}</p>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                          lead.score >= 90 ? 'bg-red-500/20 text-red-400' :
                          lead.score >= 70 ? 'bg-orange-500/20 text-orange-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>{lead.score}</span>
                      </div>
                      <p className="text-brand-text-secondary text-xs">{lead.goal}</p>
                      {lead.phone && (
                        <p className="text-brand-text-muted text-xs mt-1">📞 {lead.phone}</p>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-brand-text-muted text-sm text-center py-8">No hot leads</p>
                )}
              </div>
            </div>
          </div>

          {/* BOTTOM ROW - AUTOMATION STATUS & QUICK ACTIONS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Automation Status */}
            <div className="card-elite">
              <div className="mb-5">
                <h3 className="text-xl font-display text-brand-text-primary tracking-wide">⚙️ AUTOMATION STATUS</h3>
                <p className="text-brand-text-secondary text-xs mt-0.5">Scheduled tasks & last run times</p>
              </div>
              
              <div className="space-y-3">
                {status.automations && status.automations.map((auto, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-brand-elevated/30 rounded-lg border border-brand-red-primary/5">
                    <div className="flex items-center gap-3">
                      <span className={`relative flex h-2.5 w-2.5 ${
                        auto.status === 'running' ? '' : 'hidden'
                      }`}>
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                      </span>
                      <span className={`h-2.5 w-2.5 rounded-full ${
                        auto.status === 'running' ? 'bg-green-500' :
                        auto.status === 'warning' ? 'bg-yellow-500' :
                        'bg-brand-text-muted'
                      }`}></span>
                      <span className="text-brand-text-primary text-sm font-medium">{auto.name}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-brand-text-secondary text-xs">{auto.schedule}</p>
                      <p className="text-brand-text-muted text-xs">Last: {auto.last_run}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card-elite">
              <div className="mb-5">
                <h3 className="text-xl font-display text-brand-text-primary tracking-wide">⚡ QUICK ACTIONS</h3>
                <p className="text-brand-text-secondary text-xs mt-0.5">Execute key operations</p>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <button className="p-4 bg-brand-elevated/50 rounded-xl border border-brand-red-primary/10 hover:border-brand-red-primary/40 transition-all text-left">
                  <span className="text-2xl mb-2 block">📧</span>
                  <span className="text-brand-text-primary text-sm font-semibold block">Email Triage</span>
                  <span className="text-brand-text-muted text-xs">Categorize inbox</span>
                </button>
                <button className="p-4 bg-brand-elevated/50 rounded-xl border border-brand-red-primary/10 hover:border-brand-red-primary/40 transition-all text-left">
                  <span className="text-2xl mb-2 block">💳</span>
                  <span className="text-brand-text-primary text-sm font-semibold block">Payment Audit</span>
                  <span className="text-brand-text-muted text-xs">Check failed payments</span>
                </button>
                <button className="p-4 bg-brand-elevated/50 rounded-xl border border-brand-red-primary/10 hover:border-brand-red-primary/40 transition-all text-left">
                  <span className="text-2xl mb-2 block">📋</span>
                  <span className="text-brand-text-primary text-sm font-semibold block">PAR-Q Check</span>
                  <span className="text-brand-text-muted text-xs">Scan new leads</span>
                </button>
                <button className="p-4 bg-brand-elevated/50 rounded-xl border border-brand-red-primary/10 hover:border-brand-red-primary/40 transition-all text-left">
                  <span className="text-2xl mb-2 block">📊</span>
                  <span className="text-brand-text-primary text-sm font-semibold block">EOD Report</span>
                  <span className="text-brand-text-muted text-xs">Generate summary</span>
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 border-t border-brand-red-primary/10 py-4 bg-brand-deep/30 backdrop-blur-xl mt-8">
          <div className="container mx-auto px-6 text-center">
            <p className="text-brand-text-secondary text-xs font-medium">Elite Performance AI • Mission Control</p>
            <p className="text-brand-text-muted text-xs mt-1">Powered by OpenClaw ⚡</p>
          </div>
        </footer>
      </div>
    </>
  );
}
