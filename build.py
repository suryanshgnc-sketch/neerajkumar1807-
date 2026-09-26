#!/usr/bin/env python3
"""build.py — bundle the multi-file project into ONE portable HTML file.

Usage:  python3 build.py
Output: dist/neeraj-kumar-chem-tracker-v6.html  (works offline, easy to share)
"""
import re, pathlib
root = pathlib.Path(__file__).parent
html = (root / "index.html").read_text(encoding="utf-8")

def css(m):  return "<style>\n" + (root / m.group(1)).read_text(encoding="utf-8") + "\n</style>"
def js(m):   return "<script>\n" + (root / m.group(1)).read_text(encoding="utf-8") + "\n</script>"

html = re.sub(r'<link rel="stylesheet" href="([^"]+)">', css, html)
html = re.sub(r'<script src="([^"]+)"></script>', js, html)
out = root / "dist"; out.mkdir(exist_ok=True)
(out / "neeraj-kumar-chem-tracker-v6.html").write_text(html, encoding="utf-8")
print("Built", out / "neeraj-kumar-chem-tracker-v6.html", f"({len(html)//1024} KB)")
