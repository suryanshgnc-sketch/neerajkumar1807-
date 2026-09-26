# Neeraj Kumar — Physical Chemistry Tracker · v6.0

A black-first, gamified JEE Physical Chemistry planner with a configurable personal AI assistant.

## v6.0 — Analytics, shortcuts & a visual polish pass

**Analytics (new)**
- New **📈 ANALYTICS** card on the dashboard: a chapter-by-chapter completion leaderboard (sorted, so your weakest chapter is always visible at a glance), a GitHub-style activity heatmap of the last ~126 days, and a time-invested summary (hours logged, sessions, average Q/min, active days).
- **Pace status** — tells you AHEAD / ON TRACK / BEHIND against your set deadline, based on your last 7 days of activity vs the pace you actually need.
- **Share progress** — one click copies a short text snapshot (overall %, streak, hours logged, weakest chapter) to your clipboard, ready to paste anywhere.
- Collapsible — the ▾ button in the card header remembers whether you left it open or closed.
- Fully read-only and additive — it's computed from data you're already tracking (`state.activity`, `state.sessions`, chapter progress), so nothing about scoring, XP, or the planner changes.

**Keyboard shortcuts (new)**
- Press **?** anywhere to open a shortcuts cheat sheet — lists both the new shortcuts (`L` log, `P` planner, `S` stats, `G` good questions, `/` only-left filter) and the ones the tracker already had (`1-9` jump to chapter, `Enter` mark next question, `F` focus mode).
- A small `shortcuts ?` hint sits in the header for discoverability.

**Visual polish**
- New `css/pro-polish.css` finishing pass: tighter section rhythm, crisper card headers, consistent button casing/spacing, refined focus states, and a subtle depth vignette.
- No existing class names or layout structure were changed, so this pass is safe to drop or tweak independently of the core styles.

## v5.0 — AI connection + planner control upgrade

**AI assistant**
- The old `MDCCCVII` name is now only the default. Rename the assistant from **CONNECT → Assistant settings**.
- Connect your own Google Gemini, Groq, OpenRouter, OpenAI, or OpenAI-compatible API.
- Beginner-first connection guide explains what an API key is, where to get it, what model to choose, how to test it, and what common errors mean.
- The assistant receives a compact live snapshot of the planner rather than the API key.
- The assistant can propose changes to **pace, deadline, chapter order, chapter skips, section skips, custom section counts, and locked-plan lifecycle**.
- Review the exact changes, then apply them. Optional **automatic planner changes** mode is available in Assistant settings.
- API keys are kept in browser local storage and are not included in tracker state/cloud exports. For a public deployment, use a server-side proxy instead of exposing a reusable secret in browser code.

## Quick start

| I want to… | Do this |
|---|---|
| Just use it | Open `dist/neeraj-kumar-chem-tracker-v5.html` in a browser |
| Edit it | Change files in `css/` and `js/`, open `index.html` to preview |
| Share one file | Run `python3 build.py` → new single-file build |

## Project structure

```text
chem-tracker/
├── index.html
├── build.py
├── css/
├── js/
│   ├── app.js
│   ├── reorder.js
│   ├── mdcccvii.js       AI assistant + connection guide + planner actions
│   ├── cloud.js
│   └── whatsnew.js
├── dist/
└── docs/
```

## Security note

This is a client-side BYO-key implementation. A browser app cannot make a reusable API secret truly secret from the browser. For a personal/local tracker this can be convenient; for a public multi-user website, put the provider call behind your own backend/serverless function and never ship your provider secret to visitors.

Made by **suryansh1807**.
