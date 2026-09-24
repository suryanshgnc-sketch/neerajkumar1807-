# Neeraj Kumar — Physical Chemistry Tracker · v2.0

A gamified JEE 2027 Physical Chemistry study tracker (XP, levels, streaks, planner, daily log, chapter journey).

**v2.0 — NEW: ☁ Cloud Sync.** Update pushed by **suryansh1807** (the maker).

## Quick start
| I want to… | Do this |
|---|---|
| Just use it | Open `dist/neeraj-kumar-chem-tracker-v2.html` in any browser |
| Edit it | Change files in `css/` and `js/`, open `index.html` to preview |
| Share one file | Run `python3 build.py` → new single file in `dist/` |

## Project structure
```
chem-tracker/
├── index.html              Page markup (header, panels, modals) — links css/js below
├── build.py                Bundles everything into ONE portable HTML file
├── css/
│   ├── styles.css          Original v1 styles (core layout, gamification)
│   ├── enhancements.css    v2.0 visual polish — edit the :root tokens to re-theme
│   └── cloud.css           "What's new" banner + Cloud Sync modal styles
├── js/
│   ├── app.js              Core app: state, XP, chapters, planner, log, stats
│   ├── reorder.js          Numbered chapter re-ordering panel
│   ├── cloud.js            Cloud Sync engine (GitHub Gist) + tabbed beginner guide
│   └── whatsnew.js         New-version banner and NEW badge
├── dist/                   Generated single-file build
└── docs/CUSTOMIZING.md     "How do I change X?" cheat-sheet
```
Load order matters: `app.js` → `reorder.js` → `cloud.js` → `whatsnew.js`
(later files extend functions defined earlier, e.g. `cloud.js` wraps `saveState`).

## Credits
Made by **Suryansh Sharma**. v2.0 Cloud Sync update pushed by **suryansh1807**.
