# Yuming Peng — Academic Pages website

This site uses the original Academic Pages default theme, typography, navigation, sidebar, and footer. The interface and CV are in English; no personal photograph is displayed. Internal navigation and assets use relative paths so the same build works in local preview and on GitHub Pages.

## Content

- 15 papers from the complete Google Scholar profile: 13 journal articles and 2 conference papers.
- AES 2024 abstract 2.489, with its presenting author identified separately.
- BIOMAG 2026: three posters and one oral presentation, with all four titles and Yuming Peng's Session Chair role.
- ICBBE 2026: one accepted poster abstract, with its title. This is distinct from the ICBIP 2026 proceedings paper.
- Work experience, education, research, awards, and technical skills based on the supplied CV.

BIOMAG and ICBBE titles, presentation formats, and the chair role were supplied directly by Yuming Peng. Titles retain the supplied wording. Author lists for these five contributions can be added when available. Two Scholar records currently link to their Scholar details because a DOI was unavailable.

## Edit content

| Content | File |
| --- | --- |
| Name, affiliation, contact, website URL | `_config.yml` |
| Homepage | `_pages/about.md` |
| Work experience | `_includes/experience-content.md` |
| Education | `_includes/education-content.md` |
| Conference acceptances and AES abstract | `_includes/conference-content.md` |
| Paper list shared by Publications and CV | `_data/publications.json` |
| Individual paper pages | `_publications/` |
| Downloadable bibliography | `files/yuming-peng-publications.bib` |
| Visual styling | `assets/css/personal.css` |

After changing a paper, keep its JSON entry, individual page, and BibTeX entry consistent. The one-time content generator is outside this repository; do not rerun it after making manual changes unless those changes are also incorporated into the generator.

## Build locally

Use Ruby 3.3 with Bundler and Node.js. From this folder:

```sh
bundle install
npm install
npm run build:js
bundle exec jekyll serve
```

Open `http://localhost:4000`. For a production build, run `JEKYLL_ENV=production bundle exec jekyll build`. The output is `_site/`.

## Publish to GitHub Pages

Repository: `Pengkele/Pengkele.github.io`. Public address: `https://pengkele.github.io/`.

- `main` contains the editable Academic Pages source.
- `gh-pages` contains the locally verified production build and a `.nojekyll` file.
- GitHub Pages publishes the root of `gh-pages` using its built-in deployment service.

For updates, build the source, verify `_site`, commit the source to `main`, then copy the build into the local `publish-static` checkout, commit, and push `gh-pages`. Changing source files on `main` alone does not rebuild the live site.

The optional custom Actions workflow is retained in `deployment/jekyll.yml`. It is inactive because the current CLI authorization covers repository access but not custom workflow writes. To enable that build strategy later, authorize workflow access, move this file into `.github/workflows/`, and select GitHub Actions in Pages settings.

The original local `site` clone points to Academic Pages upstream. Use the separate `publish` and `publish-static` checkouts for this personal repository.

## Sources

- User-supplied `Yuming_Peng_CV_v2.docx`.
- [Google Scholar profile](https://scholar.google.com/citations?user=f4LlA74AAAAJ&hl=en), all 16 entries inspected directly on November 13, 2026.
- DOI publisher/Crossref records and [ORCID](https://orcid.org/0009-0001-2702-821X) for bibliographic metadata.
- Official AES abstract page linked from the Conferences page.

The original DOCX, private telephone number, date of birth, and personal photo are not part of the website package.
