# clemmer-c.github.io

Portfolio site for Cayden Clemmer — mechanical engineering, Virginia Commonwealth University.

Static HTML/CSS/JS. No build step, no dependencies, no framework. Edit a file, commit, push.

## Structure

```
index.html                         Home — hero, work index, certifications, about, contact
resume.html                        Résumé viewer (inline PDF + download)
404.html                           Not-found page
projects/
  turbofan-jet-engine.html         Case study 01
  inline-four-engine.html          Case study 02
  planet-x.html                    Case study 03 — in progress
  lawn-care.html                   Case study 04
assets/
  css/site.css                     The whole design system
  js/site.js                       Mobile nav, scroll reveals, click-to-load 3D
  favicon.svg
  docs/cayden-clemmer-resume.pdf
  docs/google-ai-essentials-certificate.pdf
```

## Design system

Defined once as custom properties at the top of `assets/css/site.css`.

| Token | Value | Use |
|---|---|---|
| `--sand-10` | `#EFE6D6` | Page ground |
| `--sand-00` | `#F7F2E8` | Cards, lifted panels |
| `--sand-20` | `#E7DCC8` | Viewer panels |
| `--rule` | `#D6C7AC` | Hairlines only — never text |
| `--ink` | `#2E2013` | Body text (12.7:1 on sand) |
| `--ink-80` | `#52402A` | Secondary text (8.0:1) |
| `--ink-60` | `#6B5539` | Captions, mono labels (5.7:1) |
| `--rust` | `#A8481F` | The one accent (4.7:1) |

Type: **Instrument Serif** for display, **Archivo** for body, **JetBrains Mono** for every
spec, date and drawing callout. All three load from Google Fonts.

Everything meets WCAG AA. Don't lighten `--ink-60` or `--rust` without re-checking contrast.

## Common edits

**Add a certification.** Copy the `<article class="cert">` block in the `#certifications`
section of `index.html`, change the issuer, title, date and links, and drop the PDF into
`assets/docs/`. The grid reflows on its own. Delete the `cert--next` placeholder card once
there are three real ones.

**Add a project.** Copy an `<article class="proj">` block in `index.html`, then copy the
closest case study in `projects/` as the new page. Update the `next` link at the bottom of
the preceding case study so the chain stays unbroken.

**Swap a 3D model.** The SketchFab model ID appears in the `data-src` of the `<iframe>` —
once on the home page (inside `.embed`) and once on the case study (inside `.viewer__stage`).
Home-page models load only when someone clicks *Load 3D model*; case-study models load when
the viewer nears the viewport. The inline SVG drawing is the fallback and the print view.

**Update the résumé.** Replace `assets/docs/cayden-clemmer-resume.pdf`, keeping the filename.

## Accessibility and motion

Real `<a>` and `<button>` elements throughout, 44px minimum hit targets, a skip link, and
visible focus rings. Every animation is disabled under `prefers-reduced-motion: reduce`, and
the page renders fully without JavaScript — reveals are a progressive enhancement gated on
the `js` class.

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Opening `index.html` directly with `file://` mostly works, but the PDF embed on
`resume.html` and the root-relative paths in `404.html` need a server.

## Deploy

GitHub Pages serves the `main` branch root. Push and it is live at
<https://clemmer-c.github.io/> within a minute or two.
