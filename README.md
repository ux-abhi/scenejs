# AR Scene Viewer
###  Community Project

A participatory urban design tool. Point your phone camera at the ground, pick a piece of community furniture, and place it in real space to explore design ideas together.

---

## Tech stack

- **Next.js 14** (App Router) — TypeScript + Tailwind CSS
- **A-Frame 1.4.0** + **AR.js** — loaded via CDN in `public/ar.html` (no webpack bundling)

---

## ⚠️ HTTPS requirement

WebAR uses `getUserMedia` which **only works on HTTPS** (or `localhost`).

| Environment | How to get HTTPS |
|---|---|
| Local dev (recommended) | Use **ngrok**: `ngrok http 3000` |
| Local dev (alternative) | `next dev --experimental-https` (self-signed cert, requires trust on device) |
| Production | **Vercel** provides HTTPS automatically |

### Quick local setup with ngrok

```bash
npm install
npm run dev          # starts on http://localhost:3000

# in a second terminal:
ngrok http 3000      # gives you https://xxxx.ngrok.io
```

Open the ngrok HTTPS URL on your phone — camera access will be available.

---

## 3D Models

Place your `.glb` files in `public/models/`:

```
public/models/
  bench.glb
  planter.glb
  pavilion.glb
  oven.glb
  chair.glb
  table.glb
  shelter.glb
```

The app references models by filename. If a model file is missing, A-Frame will silently skip it — no crash.

Free `.glb` sources:
- [Sketchfab](https://sketchfab.com) (filter: downloadable, low-poly)
- [Poly Pizza](https://poly.pizza)
- [Google Model Viewer examples](https://modelviewer.dev/examples/tester.html)

Recommended poly count: **< 50k triangles** per model for smooth performance on mid-range phones.

---

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` for the intro page.  
Open `http://localhost:3000/ar.html` to test the AR page directly (needs HTTPS on device — use ngrok).

---

## Deploy to Vercel

```bash
vercel --prod
```

Vercel handles HTTPS automatically. No extra configuration needed.

Or push to GitHub and connect the repo in the [Vercel dashboard](https://vercel.com/new).

---

## How to use

1. Open the app on your phone over HTTPS
2. Allow camera access when prompted
3. Tap **Launch AR** on the intro screen
4. Point your camera at a flat surface (ground, floor, pavement)
5. Select a model from the picker, tap **Place in AR**
6. **Tap anywhere** on the AR view to place the model
7. **Tap a placed model** to open the transform panel:
   - Drag the slider to resize
   - Tap ↺ / ↻ to rotate 45°
   - **Duplicate** or **Delete** the object
8. Use **← Back** in the toolbar to switch models without clearing the scene
9. Use the **🗑 Clear all** button to reset

---

## File structure

```
ar-scene/
├── app/
│   ├── layout.tsx        Next.js root layout
│   ├── page.tsx          Intro / launch screen
│   └── globals.css
├── public/
│   ├── ar.html           Self-contained AR page (A-Frame + AR.js via CDN)
│   └── models/
│       ├── bench.glb
│       ├── planter.glb
│       ├── pavilion.glb
│       ├── oven.glb
│       ├── chair.glb
│       ├── table.glb
│       └── shelter.glb
├── next.config.ts        Camera + COEP headers
├── tailwind.config.ts
└── tsconfig.json
```

---

## Browser support

| Browser | Status |
|---|---|
| iOS Safari 15+ | ✅ |
| Android Chrome 90+ | ✅ |
| Desktop Chrome (webcam) | ✅ (for testing) |
| Firefox | ⚠️ AR.js has limited support |

---

## Known limitations

- AR.js `markerless` / surface tracking works best in **good lighting** on flat surfaces
- Model scale may need tuning per `.glb` file depending on how it was exported — use the resize slider
- iOS requires the page to be opened in Safari (PWA add-to-home-screen also works)
