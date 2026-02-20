# Copilot Instructions

## Responsiveness

- Always write responsive code that looks good on both mobile (phones) and desktop screens.
- Use mobile-first design principles — start with styles for small screens and scale up using media queries.
- Prefer relative units (`%`, `em`, `rem`, `vw`, `vh`) over fixed units (`px`) where appropriate.
- Use CSS Flexbox or Grid for layouts to ensure they adapt naturally to different screen sizes.
- Test layouts mentally at common breakpoints: 320px (small phone), 375px (phone), 768px (tablet), 1024px (laptop), 1280px+ (desktop).
- Avoid hardcoded widths or heights that can break the layout on smaller screens.
- Make sure touch targets (buttons, links) are large enough for mobile use (minimum 44x44px).
- Ensure text is readable on small screens — avoid very small font sizes.
- Images and media should be responsive (e.g., `max-width: 100%`).
- Do not assume anything, ask if you have any requirements
- Do everything to make the website SEO friendly, for example, use semantic HTML tags, add alt attributes to images, and ensure proper heading structure.