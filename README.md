# Neeraj Kumar — Physical Chemistry Tracker · v5.0

A black-first, gamified JEE Physical Chemistry planner with a configurable personal AI assistant.

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
