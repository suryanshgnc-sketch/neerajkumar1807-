# Customizing cheat-sheet

## Colours & look
Open `css/enhancements.css` → top `:root` block.
- `--accent-a` / `--accent-b`: the cyan→violet gradient used on titles, buttons, tabs, badges.
- `--radius`: roundness of cards. `--glass`: panel background. `--line`: border colour.
Base colours (`--bg`, `--panel`, `--text`) live in `css/styles.css` `:root`.
Note: `styles.css` has a monochrome override section using `!important`; `enhancements.css` overrides it on purpose.

## Cloud Sync text (benefits, steps, FAQ)
Open `js/cloud.js` and find `BENEFITS`, `STEPS`, `FAQ` — plain arrays of text. Edit, save, done.
Change the token page link via `TOKEN_URL`.

## New-version banner
`js/whatsnew.js`: edit the banner HTML and the `CREDIT` name. To show it again after a future release,
change `VERSION_KEY` (e.g. `nkV3BannerSeen`).

## Footer credit
`index.html` → search for `<footer>`.

## Version chip in the header
`index.html` → search for `ver-chip`.

## Rebuild the single file
`python3 build.py` (needs only Python 3, no packages).

## Storage
Progress is in the browser's `localStorage` (key defined by `STORAGE_KEY` in `app.js`).
Cloud Sync stores a copy in a private GitHub gist named `nk-chem-tracker.json`.
