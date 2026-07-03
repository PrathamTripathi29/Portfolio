# Portfolio

A React portfolio site built with Vite, React Router, and Recharts.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Structure

```
src/
  siteData.js         ← ALL editable content lives here: name, bio, socials,
                        projects, LeetCode/Codeforces stats, education, interests
  App.jsx             ← routes (Home, Projects, Algorithms, About)
  components/
    Header.jsx        ← top nav bar with links to every page
    Footer.jsx        ← bottom bar with socials + copyright
    Avatar.jsx        ← profile picture frame (see below)
    ProjectCard.jsx   ← the reusable project template
    StatCard.jsx / RatingChart.jsx / DifficultyChart.jsx ← Algorithms page pieces
  pages/
    Home.jsx          ← hero (photo + intro) + section previews
    Projects.jsx      ← renders 3 ProjectCard templates from siteData.js
    Algorithms.jsx    ← LeetCode + Codeforces stats and charts
    About.jsx         ← education + interests
```

## How to customize

1. **Your info & socials** — edit `profile` and `socials` in `src/siteData.js`.
2. **Your photo** — drop a file named `profile.jpg` into the `public/` folder.
   It will appear automatically in the hero. Until then, a placeholder monogram
   is shown so nothing looks broken.
3. **Projects** — edit the `projects` array in `src/siteData.js`. Each object
   maps directly onto one card: `title`, `description`, `stack` (tech chips),
   `highlights` (bullet points), `github`, `demo`, and `tag`. Add or remove
   objects from the array to change how many cards show up.
4. **LeetCode / Codeforces stats** — edit `leetcode` and `codeforces` in
   `src/siteData.js`. `ratingHistory` feeds the line chart; `byDifficulty`
   feeds the bar chart. Update these by hand whenever your profile changes,
   or wire up the public LeetCode GraphQL API / Codeforces API later if you
   want it to update automatically.
5. **Education / interests** — edit the `education` array and `interests`
   list in `src/siteData.js`.

## Color palette

| Token | Hex | Used for |
|---|---|---|
| `--bg` | `#E6EBE0` | page background |
| `--header-footer` | `#5CA4A9` | header & footer |
| `--coral` | `#ED6A5A` | primary accent / CTAs |
| `--pale-yellow` | `#F4F1BB` | secondary accent |
| `--sage-teal` | `#9BC1BC` | tertiary accent / charts |

All defined as CSS variables in `src/index.css`.
