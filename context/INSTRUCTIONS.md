# Planning Document & Instructions 

## Goals 
To demonstrate my hybrid skill-set (technology strategy ↔ digital fabrication ↔ education) so that creative-sector nonprofits, small businesses, and arts organizations see me as the person who “makes tech feel human.” This website is not intended to be a marketing tool, but rather a way to showcase my work and connect with people who are interested in my services. I will use this to document all of my projects, and to share my thoughts and ideas. It will be somewhat of a sandbox where I can park content/experiments and so on. I will create more dedicated websites down the road, like Tech Therapy, that focus on specific services and products. 

## Technical Information  
- Modern HTML, CSS, and JavaScript (vanilla)
- No frameworks or libraries
- Deployed to Cloudflare Workers 

### Design Requirements 
- mobile friendly (mobile first)
- clean and modern design (dark mode preferred)
- light, thin fonts
- flat, simple design
- minimalistic
- no animations
- no distractions
- no clutter
- no bullshit
- no fluff

I deploy this to Cloudflare Workers via Github CI/CD intergration. Whenever I commit to the main branch, the changes are automatically deployed to Cloudflare Workers. My wrangler jsonc file is in the root of the project and sets the assets directory to the public folder (`./public`).

## Project Structure 

`/content` - is where all my content planning will be located, used for reference and content development 
`/public` - is where the published content that cloudflare publishes into the static website 
