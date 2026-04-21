# Elite Performance Dashboard - Vercel Deployment

## Quick Deploy

### Option 1: Deploy via Vercel CLI (Recommended)

```bash
cd /home/ubuntu/.openclaw/workspace/vercel-dashboard

# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Option 2: Deploy via GitHub

1. **Push to GitHub:**
```bash
cd /home/ubuntu/.openclaw/workspace
git add vercel-dashboard/
git commit -m "Add Vercel dashboard"
git push origin main
```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repo
   - Set Root Directory: `vercel-dashboard`
   - Click "Deploy"

---

## Important: Live Data Integration

The current deployment uses **mock data**. For **live data** from your Python backend:

### Option A: Hybrid Approach (Recommended)
1. Keep Python Flask dashboard running on your VPS (`http://your-vps-ip:5001`)
2. Update `pages/api/status.js` to fetch from your backend:

```javascript
export default async function handler(req, res) {
  const backendUrl = process.env.PYTHON_BACKEND_URL;
  
  if (!backendUrl) {
    return res.status(500).json({ error: 'Backend URL not configured' });
  }

  try {
    const response = await fetch(`${backendUrl}/api/status`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch from backend' });
  }
}
```

3. Set environment variable in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add: `PYTHON_BACKEND_URL = http://your-vps-ip:5001`

### Option B: Static Demo Mode
Leave as-is for a beautiful static demo showing your org structure (data updates on each deploy).

---

## File Structure

```
vercel-dashboard/
├── pages/
│   ├── index.js          # Main dashboard UI
│   └── api/
│       └── status.js     # API endpoint (mock or proxy to Python)
├── styles/
│   └── globals.css       # Tailwind + custom styles
├── package.json          # Dependencies
├── next.config.js        # Next.js config
├── tailwind.config.js    # Tailwind config
└── vercel.json           # Vercel deployment config
```

---

## Customization

### Update Mock Data
Edit `pages/api/status.js` with your real agent names, roles, and metrics.

### Add Authentication
For private dashboards, add Vercel Authentication:
```bash
vercel env add DASHBOARD_PASSWORD
```

Then check in `pages/api/status.js`:
```javascript
if (req.query.password !== process.env.DASHBOARD_PASSWORD) {
  return res.status(401).json({ error: 'Unauthorized' });
}
```

---

## URLs After Deploy

- **Production:** `https://your-project.vercel.app`
- **Preview:** `https://your-project-git-branch.vercel.app`

---

## Troubleshooting

### Build Fails
```bash
# Test build locally
npm install
npm run build
```

### API Returns Mock Data
- Check `PYTHON_BACKEND_URL` environment variable is set
- Ensure your VPS firewall allows inbound connections on port 5001

### Styling Issues
- Ensure Tailwind is properly configured
- Check browser console for CSS loading errors

---

## Cost

- **Hobby Plan:** Free (unlimited deployments, 100GB bandwidth/month)
- **Pro Plan:** $20/month (more features, team collaboration)

For a dashboard with minimal traffic, the free tier is sufficient.
