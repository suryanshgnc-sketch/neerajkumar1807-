# Neeraj Kumar — Physical Chemistry Tracker · v4.0

A gamified JEE 2027 Physical Chemistry study tracker (XP, levels, streaks, planner, daily log, chapter journey).

**v4.0 — BIG UPDATE: ✦ MDCCCVII**, an AI study coach inside the Planner (bring your own API key: Gemini / Groq / OpenRouter / custom). Made by **suryansh1807**.

## Quick start
| I want to… | Do this |
|---|---|
| Just use it | Open `dist/neeraj-kumar-chem-tracker-v4.html` in any browser |
| Edit it | Change files in `css/` and `js/`, open `index.html` to preview |
| Share one file | Run `python3 build.py` → new single file in `dist/` |

## Project structure
```
chem-tracker/
├── index.html              Page markup (header, panels, modals) — links css/js below
├── build.py                Bundles everything into ONE portable HTML file
├── css/
│   ├── styles.css          Original v1 styles (core layout, gamification)
│   ├── enhancements.css    v4.0 visual polish — edit the :root tokens to re-theme
│   └── cloud.css           "What's new" banner + Cloud Sync modal styles
├── js/
│   ├── app.js              Core app: state, XP, chapters, planner, log, stats
│   ├── reorder.js          Numbered chapter re-ordering panel
│   ├── mdcccvii.js         MDCCCVII AI coach (BYO key, proposals need APPLY)
│   ├── cloud.js            Cloud Sync engine (GitHub Gist) + tabbed beginner guide
│   └── whatsnew.js         New-version banner and NEW badge
├── dist/                   Generated single-file build
└── docs/CUSTOMIZING.md     "How do I change X?" cheat-sheet
```
Load order matters: `app.js` → `reorder.js` → `cloud.js` → `whatsnew.js`
(later files extend functions defined earlier, e.g. `cloud.js` wraps `saveState`).

## Credits
Made by **suryansh1807**.
