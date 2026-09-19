# Cayden Clemmer — Portfolio

Personal mechanical engineering portfolio, published with GitHub Pages.

## Structure

- `index.html` — home page
- `projects.html` — list of all projects
- `project-radial-engine.html` — Radial Engine project page (Onshape embed)
- `project-2.html`, `project-3.html` — your two SolidWorks project pages (Sketchfab embeds)
- `style.css` — shared styling used by every page
- `files/` — CAD files (STEP / SLDPRT / STL) available for download (create this folder when you upload files)
- `resume.pdf` — add your resume PDF here so the Résumé button on the home page works

## To update this site

1. Edit the relevant `.html` file.
2. On GitHub: open the file, click the pencil (Edit) icon, make your change, and commit —
   or use "Add file → Upload files" to replace a file entirely.
3. The live site updates automatically within a minute or two of committing.

## Adding a CAD embed

- **Onshape:** Share → Public (or "Anyone with link") → copy the Embed iframe code.
- **Sketchfab:** open your model → Share/Embed icon → copy the `<iframe>` code.
- Paste the copied code into the matching `<div class="embed-placeholder">...</div>` in the project's HTML file, replacing that div entirely.

## Live site

https://[your-username].github.io
