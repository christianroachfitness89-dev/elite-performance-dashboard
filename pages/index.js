import Head from 'next/head';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Elite Performance AI - Command Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Christian Roach Fitness - AI Organization Command Center" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡</text></svg>" />
      </Head>

      {/* Main Container */}
      <div className="min-h-screen bg-brand-deepest">
        {/* Grain Overlay */}
        <div className="bg-grain fixed inset-0 pointer-events-none z-0"></div>

        {/* Header */}
        <header className="relative z-10 border-b border-brand-red-primary/20 bg-brand-deep/50 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-red-primary to-brand-red-bright flex items-center justify-center glow-soft">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h1 className="text-3xl font-display tracking-wider text-gradient">Elite Performance AI</h1>
                  <p className="text-brand-text-secondary text-sm">Christian Roach Fitness - Command Center</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="card-elite py-2 px-4">
                  <span className="text-brand-text-secondary text-sm">Status:</span>
                  <span className="text-brand-red-bright font-semibold ml-2">● Online</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10 container mx-auto px-6 py-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-4xl font-display text-brand-text-primary mb-2">Welcome Back</h2>
            <p className="text-brand-text-secondary text-lg">Your AI-powered fitness business command center</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Lead Card */}
            <div className="card-elite">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-brand-text-secondary text-sm uppercase tracking-wider">Active Leads</h3>
                <span className="text-3xl">🎯</span>
              </div>
              <p className="text-4xl font-display text-brand-text-primary mb-2">67</p>
              <div className="flex items-center gap-2">
                <span className="text-brand-red-bright text-sm font-semibold">+15</span>
                <span className="text-brand-text-secondary text-sm">this week</span>
              </div>
            </div>

            {/* Revenue Card */}
            <div className="card-elite">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-brand-text-secondary text-sm uppercase tracking-wider">Weekly Revenue</h3>
                <span className="text-3xl">💰</span>
              </div>
              <p className="text-4xl font-display text-brand-text-primary mb-2">$4,280</p>
              <div className="flex items-center gap-2">
                <span className="text-brand-red-bright text-sm font-semibold">+12%</span>
                <span className="text-brand-text-secondary text-sm">vs last week</span>
              </div>
            </div>

            {/* Sessions Card */}
            <div className="card-elite">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-brand-text-secondary text-sm uppercase tracking-wider">PT Sessions</h3>
                <span className="text-3xl">💪</span>
              </div>
              <p className="text-4xl font-display text-brand-text-primary mb-2">38</p>
              <div className="flex items-center gap-2">
                <span className="text-brand-text-secondary text-sm">this week</span>
              </div>
            </div>

            {/* Clients Card */}
            <div className="card-elite">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-brand-text-secondary text-sm uppercase tracking-wider">Active Clients</h3>
                <span className="text-3xl">👥</span>
              </div>
              <p className="text-4xl font-display text-brand-text-primary mb-2">42</p>
              <div className="flex items-center gap-2">
                <span className="text-brand-red-bright text-sm font-semibold">+3</span>
                <span className="text-brand-text-secondary text-sm">new this month</span>
              </div>
            </div>
          </div>

          {/* Recent Activity & Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Leads */}
            <div className="lg:col-span-2 card-elite">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-display text-brand-text-primary tracking-wider">Recent Hot Leads</h3>
                <button className="btn-elite text-sm py-2 px-4">View All</button>
              </div>
              <div className="space-y-4">
                {/* Lead Item */}
                <div className="flex items-center justify-between p-4 bg-brand-elevated rounded border border-brand-red-primary/20 hover:border-brand-red-primary transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-red-primary to-brand-red-bright flex items-center justify-center">
                      <span className="text-lg">🔥</span>
                    </div>
                    <div>
                      <p className="text-brand-text-primary font-semibold">Gavin Ridley</p>
                      <p className="text-brand-text-secondary text-sm">Retired • $150/wk budget • Multiple surgeries</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-brand-red-bright font-bold text-lg">95</span>
                    <p className="text-brand-text-secondary text-xs">Score</p>
                  </div>
                </div>

                {/* Lead Item */}
                <div className="flex items-center justify-between p-4 bg-brand-elevated rounded border border-brand-red-primary/20 hover:border-brand-red-primary transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-red-primary to-brand-red-bright flex items-center justify-center">
                      <span className="text-lg">🔥</span>
                    </div>
                    <div>
                      <p className="text-brand-text-primary font-semibold">Kerry-Anne Darlington</p>
                      <p className="text-brand-text-secondary text-sm">21kg loss goal • Anxiety/Perimenopause</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-brand-red-bright font-bold text-lg">90</span>
                    <p className="text-brand-text-secondary text-xs">Score</p>
                  </div>
                </div>

                {/* Lead Item */}
                <div className="flex items-center justify-between p-4 bg-brand-elevated rounded border border-brand-red-primary/20 hover:border-brand-red-primary transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-red-primary to-brand-red-bright flex items-center justify-center">
                      <span className="text-lg">🔥</span>
                    </div>
                    <div>
                      <p className="text-brand-text-primary font-semibold">Kaylee Spicer</p>
                      <p className="text-brand-text-secondary text-sm">39yo Teacher • Knee injury • Hormone therapy</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-brand-red-bright font-bold text-lg">85</span>
                    <p className="text-brand-text-secondary text-xs">Score</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card-elite">
              <h3 className="text-xl font-display text-brand-text-primary tracking-wider mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full btn-elite text-left py-3 px-4 flex items-center gap-3">
                  <span className="text-xl">📧</span>
                  <span>Contact Hot Leads</span>
                </button>
                <button className="w-full btn-elite text-left py-3 px-4 flex items-center gap-3">
                  <span className="text-xl">📊</span>
                  <span>Weekly Revenue Report</span>
                </button>
                <button className="w-full btn-elite text-left py-3 px-4 flex items-center gap-3">
                  <span className="text-xl">📅</span>
                  <span>View Calendar</span>
                </button>
                <button className="w-full btn-elite text-left py-3 px-4 flex items-center gap-3">
                  <span className="text-xl">🎫</span>
                  <span>Golden Ticket Campaign</span>
                </button>
                <button className="w-full btn-elite text-left py-3 px-4 flex items-center gap-3">
                  <span className="text-xl">⚙️</span>
                  <Link href="/agents" className="flex-1">AI Agents Status</Link>
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 border-t border-brand-red-primary/20 mt-12 py-6 bg-brand-deep/50">
          <div className="container mx-auto px-6 text-center text-brand-text-secondary text-sm">
            <p>Elite Performance AI Dashboard • Christian Roach Fitness Coaching</p>
            <p className="mt-2">Powered by OpenClaw • <span className="text-brand-red-bright">⚡</span></p>
          </div>
        </footer>
      </div>
    </>
  );
}
