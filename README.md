# DMF Website Readme File

# Post Frontmatter

Each post starts off with a metadata formatted in the YAML style. An example is shown below:

```
---
layout: page.hbs
title: Journal paper accepted to Artificial Intelligence for Engineering Design, Analysis and Manufacturing.
author: James Gopsill
type: Publication
summary: One of our papers has been accepted to Artificial Intelligence for Engineering Design, Analysis and Manufacturing. Entitled ''Automatic Generation of Design Structure Matrices through the Evolution of Product Models'', the paper reports on a novel strategy to automatically generate Design Structure Matrices from the changes to engineering documentation and models.
date: 04-04-2017
collection:
  - posts
  - jgopsill
  - bath
  - publications
  - locm
  - bristol
---

[REST OF THE POST GOES HERE]
```

# Types

- Publication
- Post
- Project
- PhD

# Collections

Collections are used to organise and distribute the posts around the website. You should tag your posts with these in order for it to appear in the right location.

You do this by adding the collection metadata to your post. Here's an example:

```
---
collection:
  - jgopsill
  - locm
  - publications
---
```

This post will appear on James Gopsills personal page, the locm page and the publications page.

# Collections Reference List

Here is a list of the collections currently being used.

- authors
  - jgopsill
  - dboa
  - csnider
- places
  - bath
  - bristol
- posts
- projects
  - locm
  - physicad
  - lightweightBIM
- publications
- courses
- handbook
- people
  - peopleatbristol
  - peopleatbath
