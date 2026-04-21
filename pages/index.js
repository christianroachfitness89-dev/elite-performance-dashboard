import Head from 'next/head';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Elite Performance AI - Command Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Christian Roach Fitness - AI Organization Command Center" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Main Container */}
      <div className="min-h-screen bg-animated relative">
        {/* Grain Overlay */}
        <div className="bg-grain"></div>

        {/* Ambient Glow Orbs */}
        <div className="fixed top-0 left-1/4 w-96 h-96 bg-brand-red-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-brand-red-bright/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header */}
        <header className="relative z-10 border-b border-brand-red-primary/10 bg-brand-deep/30 backdrop-blur-xl sticky top-0">
          <div className="container mx-auto px-6 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-red-primary to-brand-red-bright flex items-center justify-center glow-medium transform hover:scale-105 transition-transform duration-300">
                  <span className="text-3xl">⚡</span>
                </div>
                <div>
                  <h1 className="text-4xl font-display tracking-wide text-gradient">Elite Performance AI</h1>
                  <p className="text-brand-text-secondary text-sm font-medium mt-0.5">Christian Roach Fitness • Command Center</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2 card-elite py-2.5 px-5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red-glow opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-red-bright"></span>
                  </span>
                  <span className="text-brand-text-secondary text-sm font-medium">System Online</span>
                </div>
                <Link href="/agents" className="btn-elite py-2.5 px-6 text-sm">
                  View Agents
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10 container mx-auto px-6 py-12">
          {/* Welcome Section */}
          <div className="mb-12 animate-fade-in">
            <h2 className="text-5xl font-display text-brand-text-primary mb-3 tracking-wide">Welcome Back</h2>
            <p className="text-brand-text-secondary text-lg font-light max-w-2xl">Your AI-powered fitness business command center. Real-time insights, automated lead capture, and intelligent client management.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Lead Card */}
            <div className="card-elite animate-fade-in-delay-1">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-brand-text-muted text-xs uppercase tracking-widest font-semibold mb-1">Active Leads</p>
                  <p className="text-5xl font-display text-brand-text-primary leading-none">67</p>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center text-3xl border border-blue-500/20">
                  🎯
                </div>
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-brand-red-primary/10">
                <span className="text-brand-red-bright text-sm font-semibold flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  +15
                </span>
                <span className="text-brand-text-muted text-sm">this week</span>
              </div>
            </div>

            {/* Revenue Card */}
            <div className="card-elite animate-fade-in-delay-2">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-brand-text-muted text-xs uppercase tracking-widest font-semibold mb-1">Weekly Revenue</p>
                  <p className="text-5xl font-display text-brand-text-primary leading-none">$4,280</p>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center text-3xl border border-green-500/20">
                  💰
                </div>
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-brand-red-primary/10">
                <span className="text-brand-red-bright text-sm font-semibold flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  +12%
                </span>
                <span className="text-brand-text-muted text-sm">vs last week</span>
              </div>
            </div>

            {/* Sessions Card */}
            <div className="card-elite animate-fade-in-delay-3">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-brand-text-muted text-xs uppercase tracking-widest font-semibold mb-1">PT Sessions</p>
                  <p className="text-5xl font-display text-brand-text-primary leading-none">38</p>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-red-primary/20 to-brand-red-bright/20 flex items-center justify-center text-3xl border border-brand-red-primary/20">
                  💪
                </div>
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-brand-red-primary/10">
                <span className="text-brand-text-muted text-sm">this week</span>
              </div>
            </div>

            {/* Clients Card */}
            <div className="card-elite animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-brand-text-muted text-xs uppercase tracking-widest font-semibold mb-1">Active Clients</p>
                  <p className="text-5xl font-display text-brand-text-primary leading-none">42</p>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center text-3xl border border-purple-500/20">
                  👥
                </div>
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-brand-red-primary/10">
                <span className="text-brand-red-bright text-sm font-semibold flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  +3
                </span>
                <span className="text-brand-text-muted text-sm">new this month</span>
              </div>
            </div>
          </div>

          {/* Recent Activity & Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Recent Leads */}
            <div className="lg:col-span-2 card-elite">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-display text-brand-text-primary tracking-wide">Recent Hot Leads</h3>
                  <p className="text-brand-text-secondary text-sm mt-1">High-intent prospects ready to convert</p>
                </div>
                <button className="btn-elite text-sm py-2.5 px-5">View All Leads</button>
              </div>
              <div className="space-y-4">
                {/* Lead Item - Gavin */}
                <div className="group p-5 bg-brand-elevated/50 rounded-xl border border-brand-red-primary/10 hover:border-brand-red-primary/40 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-red-primary to-brand-red-bright flex items-center justify-center glow-soft group-hover:glow-medium transition-shadow">
                        <span className="text-2xl">🔥</span>
                      </div>
                      <div>
                        <p className="text-brand-text-primary font-semibold text-lg">Gavin Ridley</p>
                        <p className="text-brand-text-secondary text-sm mt-0.5">Retired • $150/wk budget • Multiple surgeries</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        <span className="text-brand-red-bright font-bold text-2xl font-display">95</span>
                        <span className="text-brand-text-muted text-xs uppercase tracking-wider">Score</span>
                      </div>
                      <span className="text-brand-red-bright text-xs font-semibold">ULTRA HOT</span>
                    </div>
                  </div>
                </div>

                {/* Lead Item - Kerry-Anne */}
                <div className="group p-5 bg-brand-elevated/50 rounded-xl border border-brand-red-primary/10 hover:border-brand-red-primary/40 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-red-primary to-brand-red-bright flex items-center justify-center glow-soft group-hover:glow-medium transition-shadow">
                        <span className="text-2xl">🔥</span>
                      </div>
                      <div>
                        <p className="text-brand-text-primary font-semibold text-lg">Kerry-Anne Darlington</p>
                        <p className="text-brand-text-secondary text-sm mt-0.5">21kg loss goal • Anxiety/Perimenopause</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        <span className="text-brand-red-bright font-bold text-2xl font-display">90</span>
                        <span className="text-brand-text-muted text-xs uppercase tracking-wider">Score</span>
                      </div>
                      <span className="text-brand-red-bright text-xs font-semibold">HOT</span>
                    </div>
                  </div>
                </div>

                {/* Lead Item - Kaylee */}
                <div className="group p-5 bg-brand-elevated/50 rounded-xl border border-brand-red-primary/10 hover:border-brand-red-primary/40 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-red-primary to-brand-red-bright flex items-center justify-center glow-soft group-hover:glow-medium transition-shadow">
                        <span className="text-2xl">🔥</span>
                      </div>
                      <div>
                        <p className="text-brand-text-primary font-semibold text-lg">Kaylee Spicer</p>
                        <p className="text-brand-text-secondary text-sm mt-0.5">39yo Teacher • Knee injury • Hormone therapy</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        <span className="text-brand-red-bright font-bold text-2xl font-display">85</span>
                        <span className="text-brand-text-muted text-xs uppercase tracking-wider">Score</span>
                      </div>
                      <span className="text-brand-red-bright text-xs font-semibold">HOT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card-elite">
              <div className="mb-6">
                <h3 className="text-2xl font-display text-brand-text-primary tracking-wide">Quick Actions</h3>
                <p className="text-brand-text-secondary text-sm mt-1">Execute key business tasks</p>
              </div>
              <div className="space-y-3">
                <button className="w-full btn-elite text-left py-3.5 px-5 flex items-center gap-4 group">
                  <span className="text-2xl group-hover:scale-110 transition-transform">📧</span>
                  <span className="font-medium">Contact Hot Leads</span>
                </button>
                <button className="w-full card-elite text-left py-3.5 px-5 flex items-center gap-4 hover:border-brand-red-primary/40 transition-all group">
                  <span className="text-2xl group-hover:scale-110 transition-transform">📊</span>
                  <span className="text-brand-text-primary font-medium">Weekly Revenue Report</span>
                </button>
                <button className="w-full card-elite text-left py-3.5 px-5 flex items-center gap-4 hover:border-brand-red-primary/40 transition-all group">
                  <span className="text-2xl group-hover:scale-110 transition-transform">📅</span>
                  <span className="text-brand-text-primary font-medium">View Calendar</span>
                </button>
                <button className="w-full card-elite text-left py-3.5 px-5 flex items-center gap-4 hover:border-brand-red-primary/40 transition-all group">
                  <span className="text-2xl group-hover:scale-110 transition-transform">🎫</span>
                  <span className="text-brand-text-primary font-medium">Golden Ticket Campaign</span>
                </button>
                <Link href="/agents" className="w-full card-elite text-left py-3.5 px-5 flex items-center gap-4 hover:border-brand-red-primary/40 transition-all group">
                  <span className="text-2xl group-hover:scale-110 transition-transform">⚙️</span>
                  <span className="text-brand-text-primary font-medium">AI Agents Status</span>
                </Link>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 border-t border-brand-red-primary/10 py-8 bg-brand-deep/30 backdrop-blur-xl">
          <div className="container mx-auto px-6 text-center">
            <p className="text-brand-text-secondary text-sm font-medium">Elite Performance AI Dashboard • Christian Roach Fitness Coaching</p>
            <p className="text-brand-text-muted text-xs mt-3 flex items-center justify-center gap-2">
              Powered by OpenClaw
              <span className="text-brand-red-bright animate-pulse-slow">⚡</span>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
