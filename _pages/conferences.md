---
title: Conferences
permalink: /conferences/
layout: archive
author_profile: true
---

<p class="page-intro">Conference presentations, accepted abstracts, and published meeting contributions.</p>
{% capture conferences %}{% include conference-content.md %}{% endcapture %}{{ conferences | markdownify }}

## Conference proceedings
{% include publication-list.html category='conferences' %}
