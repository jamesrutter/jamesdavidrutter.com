# Projects System Documentation

## Overview

The projects system is built using Astro's content collections to automatically pull in markdown files from the `portfolio/projects` directory and display them as a beautiful, filterable portfolio.

## URL Structure

- **Projects Landing Page**: `/projects`
- **Individual Project Pages**: `/projects/[project-name]`

The system automatically generates clean URLs by extracting the folder name from the project structure.

## Project Structure

```
portfolio/projects/
├── project-name/
│   └── project-name.md
├── another-project/
│   └── another-project.md
└── ...
```

Each project should be in its own folder with a markdown file that matches the folder name.

## Frontmatter Schema

Each project markdown file must include the following frontmatter:

```yaml
---
title: "Project Title"
description: "Brief description of the project"
image: "optional-image-url"
link: "optional-external-link"
category: "category-name"
tags:
  - tag1
  - tag2
  - tag3
date: 2023-08-01
updated: 2023-09-01  # optional
---
```

### Required Fields

- `title`: The project title
- `description`: A brief description shown on the projects page
- `category`: Used for filtering (e.g., "projects", "it", "labs")
- `tags`: Array of tags for search and filtering
- `date`: Project date (used for sorting)

### Optional Fields

- `image`: URL to a project image
- `link`: External link to the project
- `updated`: Last updated date

## Features

### Projects Landing Page (`/projects`)

- **Grid Layout**: Responsive card-based layout
- **Filtering**: Filter by category using dropdown
- **Sorting**: Sort by date (newest/oldest) or title (A-Z/Z-A)
- **Search**: Real-time search across titles, descriptions, and tags
- **Responsive**: Mobile-friendly design

### Project Detail Pages (`/projects/[project-name]`)

- **Clean URLs**: `/projects/haystack-it` instead of `/projects/haystack-it/haystack-it`
- **Breadcrumb Navigation**: Easy navigation back to projects list
- **Metadata Display**: Category, date, tags
- **External Links**: Optional "View Project" button
- **Markdown Content**: Full markdown rendering with styled typography

## Styling

The projects system follows the existing design system:

- Uses CSS custom properties from `global.css`
- Consistent spacing with `--space-*` variables
- Typography using the Manrope font family
- Dark theme with proper contrast ratios
- Hover effects and smooth transitions

## Adding New Projects

1. Create a new folder in `portfolio/projects/` with your project name
2. Create a markdown file with the same name as the folder
3. Add the required frontmatter
4. Write your project content in markdown
5. The project will automatically appear on the projects page

## Technical Implementation

- **Content Collection**: Defined in `src/content.config.ts`
- **Landing Page**: `src/pages/projects/index.astro`
- **Detail Pages**: `src/pages/projects/[...slug].astro`
- **Client-side Filtering**: JavaScript for real-time filtering and search
- **Static Generation**: All pages are pre-rendered at build time

## Performance

- Static site generation for fast loading
- Minimal JavaScript (only for filtering/search)
- Optimized CSS with no external dependencies
- Responsive images (when implemented)

## Future Enhancements

- Image optimization and display
- Project categories page
- Tag-based filtering
- Project search with better indexing
- Related projects suggestions 