# Project direction

The current product and implementation source of truth is:

- `docs/apple-portfolio-redesign-spec.md`
- `src/content/` for public biography, project, research, education, and experience facts
- `public/Enqi_Jing_Resume_File.pdf` for the complete verified resume

## Implementation rules

- Keep the site on React 18 and Vite.
- Use the existing CSS design tokens and component styles. Do not introduce Ant Design or Tailwind.
- Keep theme state local to the single theme control and preserve one storage key.
- Keep page routes lazy-loaded.
- Add public content to `src/content/` before rendering it in pages.
- Do not add template projects, placeholder contact details, unverified performance claims, or stock photography.
- Notes should remain unpublished until real authored content is available.
- Preserve keyboard support, visible focus, reduced-motion support, static route shells, and the GitHub Pages deployment workflow.
- Run `npm run build` before handing off changes.
