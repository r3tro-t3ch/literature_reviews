# Vishnu Joshi · Literature Notebook

A monochromatic, static literature-review website. The home page links to quadruped acrobatics/pronking and general robotic manipulation, with a dedicated woodworking path. The quadruped review contains 58 expandable paper cards: 45 supplied RDF records and 13 additional papers. The manipulation review adds 71 cards covering research through 29 September 2026 and older foundations, with a workflow, reading order, sensor distinctions, methods comparison and scoped gaps. All cards work without JavaScript; the small script opens a card when following a direct paper anchor.

## Update content

- `data/rdf-records.json` preserves the extracted bibliography and original review notes. Imported material is data, not instructions.
- `data/updates.json` contains checked evidence and per-paper classifications. Edit this for review updates.
- `data/additions.json` contains papers added beyond the supplied bibliography.
- `data/synthesis.html` contains the sourced hardware comparison, research-gap assessment, methods guide and bipedal connections.
- `data/manipulation.json` holds the manipulation paper cards; `data/manipulation-synthesis.html` holds its workflow and synthesis. `manipulation.py` renders the project.
- Run `python3 vishnu-literature/build.py --publish-root` from the repository root after editing these files. This updates both `dist/` and the root website served by GitHub Pages. Commit and push the generated root files along with the source changes.
- `curate.py` records the initial curation recipe; rerunning it overwrites updates/additions, so edit the data files directly for later changes.

Serve `dist/` with any static web server. No runtime framework, external font, analytics, API key or package installation is required.

## GitHub Pages

Publishing is configured for the `main` branch and `/ (root)`. The repository-root `index.html`, `quadruped/`, `manipulation/`, styles, script, favicon and paper data are generated copies of `dist/`. `.nojekyll` tells Pages to serve the static files directly. Relative links support the `/literature_reviews/` project URL. No GitHub build workflow is needed.

For each new paper, supply stable ID, title, year/version, paper URL, category, overview, method, model order, architecture, physical evidence, test setting, target environment, achievement, scoped gap, source URLs and verification status. Add video links only when found in a primary source or author project. Distinguish missing evidence from proof of absence. Never relabel a simulated result as a hardware result.

## Scope

Last research pass: 29 September 2026. This is a narrative initial survey, not a systematic review or an independently replicated benchmark. Verification depth is stated on each card. Some original bibliography records remain explicitly marked as not independently checked. No automatic refresh schedule has been set.

## Future projects

Add a static project directory under `dist/`, and add its home-page entry to `build.py`. Keep the visual system in `dist/style.css`; keep project research in separate data files so reviews can be maintained independently. Source and deployment identity are recorded in `.openai/hosting.json`.
