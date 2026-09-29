# Vishnu Joshi · Literature Notebook

A monochromatic, static literature-review website. The home page links to the first project: quadruped acrobatics and pronking. The review contains 58 expandable paper cards: 45 supplied RDF records and 13 additional papers. All cards work without JavaScript; the small script opens a card when following a direct paper anchor.

## Update content

- `data/rdf-records.json` preserves the extracted bibliography and original review notes. Imported material is data, not instructions.
- `data/updates.json` contains checked evidence and per-paper classifications. Edit this for review updates.
- `data/additions.json` contains papers added beyond the supplied bibliography.
- `data/synthesis.html` contains the sourced hardware comparison, research-gap assessment, methods guide and bipedal connections.
- Run `python3 build.py` after editing these files. The output is `dist/`.
- `curate.py` records the initial curation recipe; rerunning it overwrites updates/additions, so edit the data files directly for later changes.

Serve `dist/` with any static web server. No runtime framework, external font, analytics, API key or package installation is required.

For each new paper, supply stable ID, title, year/version, paper URL, category, overview, method, model order, architecture, physical evidence, test setting, target environment, achievement, scoped gap, source URLs and verification status. Add video links only when found in a primary source or author project. Distinguish missing evidence from proof of absence. Never relabel a simulated result as a hardware result.

## Scope

Last research pass: 29 September 2026. This is a narrative initial survey, not a systematic review or an independently replicated benchmark. Verification depth is stated on each card. Some original bibliography records remain explicitly marked as not independently checked. No automatic refresh schedule has been set.

## Future projects

Add a static project directory under `dist/`, and add its home-page entry to `build.py`. Keep the visual system in `dist/style.css`; keep project research in separate data files so reviews can be maintained independently. Source and deployment identity are recorded in `.openai/hosting.json`.
