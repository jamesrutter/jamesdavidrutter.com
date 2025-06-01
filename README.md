# Professional Portfolio 

This is a monorepo to contain my professional portfolio and other projects. It will be used to document almost nearly everything that I do professional so that I have a place to store and share my work. 

## Tech Stack
- Obsidian 
- Cloudflare Workers (for the portfolio website)
- Website: Astro (HTML, CSS, JavaScript)
- pnpm (for package management and monorepo management)

## Repo Structure 
For now, the repo has two main folders:
- `portfolio` - This is the entry point for the Obsidian vault. It will allow me to use Obsidian as a high quality markdown editor tool to write my content and manage it in version control. 
- `website` - This is where I will store the website that will be hosted on Cloudflare Pages. It will be built using Astro and will be hosted on Cloudflare Pages. 


## Portfolio Structure (Obsidian)
Here are some notes on how I have Obsidian setup: 

```
portfolio/
├── 00-Index/
│   ├── bio.md
│   ├── skills+tech.md
│   └── projects.md
├── 01-Templates/
│   ├── Project Template.md
│   └── Meeting Notes Template.md
├── 02-Projects/
│   ├── 2024-Website-Redesign/
│   │   ├── Website-Redesign-Project.md
│   │   ├── assets/
│   │   │   ├── screenshots/
│   │   │   ├── mockups/
│   │   │   └── diagrams/
│   │   └── notes/
│   ├── 2023-Mobile-App/
│   └── 2023-Data-Pipeline/
├── 03-Skills/
│   ├── Programming Languages.md
│   ├── Frameworks & Tools.md
│   └── Certifications.md
├── 04-Career/
│   ├── Resume Versions/
│   ├── Interview Prep/
│   └── Professional Development.md
└── 99-Archive/
    └── Completed Projects/
```


## Website (Astro)

My portfolio website is built using Astro. It is hosted on Cloudflare Pages. 

Since I am using pnpm workspaces, I can use the `pnpm --filter <package> <command>` syntax to run commands in the `website` package. 

For example, to run the development server, I can run `pnpm --filter website dev`.

To build the website, I can run `pnpm --filter website build`.

To preview the website, I can run `pnpm --filter website preview`.

To deploy the website, I can run `pnpm --filter website deploy`.

### Structure 

```
website/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── styles/
```