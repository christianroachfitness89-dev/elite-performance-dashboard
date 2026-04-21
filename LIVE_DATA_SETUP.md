# Elite Performance Dashboard - Live Data Connection

## ✅ ngrok Tunnel Active

**Public URL:** `https://difficult-unwieldy-repulsion.ngrok-free.dev`  
**Forwards to:** `http://localhost:5001` (org_dashboard.py)

---

## 🔧 Vercel Setup

### Add Environment Variable on Vercel:

1. Go to: **https://vercel.com/christianroachfitness89-dev/elite-performance-dashboard/settings/environment-variables**

2. Add new variable:
   ```
   Name: PYTHON_BACKEND_URL
   Value: https://difficult-unwieldy-repulsion.ngrok-free.dev
   ```

3. Click **Save**

4. Redeploy: Go to **Deployments** → Click latest → **Redeploy**

---

## 📊 Data Flow

```
Browser → Vercel Dashboard → /api/status.js 
         → ngrok URL → VPS:5001 → org_dashboard.py
         → Live Stripe/Calendar/Gmail/PAR-Q data
         → Back to browser (60s auto-refresh)
```

---

## ⚠️ Important Notes

### ngrok URL Changes
- Free ngrok accounts get a **new URL on restart**
- If tunnel stops, run: `/home/ubuntu/.openclaw/workspace/scripts/start_tunnel.sh`
- Update Vercel env var with new URL if it changes

### Keep Tunnel Running
```bash
# Check if running
ps aux | grep "ngrok http 5001" | grep -v grep

# Restart if needed
nohup /home/ubuntu/.local/bin/ngrok http 5001 --log=stdout > /tmp/ngrok_cli.log 2>&1 &
```

### Test Live Data
```bash
# Test ngrok endpoint
curl -H "ngrok-skip-browser-warning: true" https://difficult-unwieldy-repulsion.ngrok-free.dev/api/status

# Should return JSON with live Stripe, Calendar, Gmail data
```

---

## 🎯 What's Live Now

| Data Source | Status | Refresh |
|-------------|--------|---------|
| Stripe Payments | ✅ Live | Real-time |
| Google Calendar | ✅ Live | Real-time |
| Gmail Inbox | ✅ Live | Real-time |
| PAR-Q Leads | ✅ Live | Every 5 min |
| AI Agents | ✅ Live | Real-time |
| Ops Scripts | ✅ Live | Per schedule |

---

## 📈 Dashboard Features

- **Auto-refresh:** Every 60 seconds
- **Dark brand colors:** Christian Roach Fitness Red & Grey
- **Typography:** Bebas Neue headings, Inter body
- **Grain overlay:** Carbon-fiber texture
- **Grid layout:** Desktop-optimized (5-col metrics, 3-col schedule, 2-col actions)

---

*Last updated: 2026-04-21 22:43 UTC*  
*Tunnel PID: 93935*
