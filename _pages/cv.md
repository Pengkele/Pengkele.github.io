---
title: Curriculum Vitae
permalink: /cv/
layout: single
author_profile: true
---

<p class="page-intro">Yuming Peng · Sebastian Peng</p>
<p>PhD Researcher, Beihang University · Senior R&amp;D Engineer, X-MAGTECH<br>Beijing, China · <a href="mailto:16171070@buaa.edu.cn">16171070@buaa.edu.cn</a></p>
<button class="btn btn--primary print-cv" type="button" onclick="window.print()">Print / Save as PDF</button>

## Research interests

Cryogen-free OPM-MEG systems, algorithms, and software; multimodal neuroimaging of epileptogenic sources and networks; functional mapping and clinical translation.

## Education
{% capture education %}{% include education-content.md %}{% endcapture %}{{ education | markdownify }}

## Professional experience
{% capture experience %}{% include experience-content.md %}{% endcapture %}{{ experience | markdownify }}

## Research projects

- Core project contributor to the development of a cryogen-free MEG system under China’s National Key R&D Program during the 14th Five-Year Plan, including proposal preparation and project implementation.
- Contributor to two Beijing Natural Science Foundation projects during doctoral study.

## Honors & patents

- National Bronze Award and Beijing First Prize, China International College Students’ Innovation and Entrepreneurship Competition (Youth Red Dream Journey track).
- Doctoral Freshman Scholarship and Academic Scholarship, Beihang University.
- Two patent applications accepted for examination.

## Technical skills

- **Programming:** Python, MATLAB; working knowledge of R, machine learning and deep learning frameworks.
- **Neuroimaging:** Brainstorm, FieldTrip, MNE, SPM, ANTsPy, 3D Slicer; familiarity with FreeSurfer, CONN, and FSL.
- **Methods:** MEG/EEG/SEEG/MRI analysis, ERP/ERF, time–frequency analysis, aperiodic activity, functional connectivity, graph analysis, microstates, network dynamics, source localization, simulation, and 3D registration.
- **Systems:** Desktop scientific software, Ubuntu, WSL, SQL, SQLite, MySQL, and medical equipment network integration.

## Publications
<p class="authorship-note">† Co-first author. My name appears in bold.</p>
{% include publication-list.html %}

{% capture conferences %}{% include conference-content.md %}{% endcapture %}{{ conferences | markdownify }}
