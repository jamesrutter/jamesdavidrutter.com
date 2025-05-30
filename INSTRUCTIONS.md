# Planning Document & Instructions 

## Goals 
My goals are to attract consulting opportunities and showcase my work, having a spot to link to all my projects and work, eventually I will begin writing articles, but for now, the goal is to just showcase and hopefully demonstrate my client projects to prospective clients.


## Technical Information  
- Modern HTML5, CSS3, and JavaScript (vanilla)
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
