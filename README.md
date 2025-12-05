# Boom and Bust: Economic Cycles in Iliff, Colorado (1900-2020)

Digital Humanities project by Evan Jelle for ENGL 326, Kansas State University

## About This Project

For my final DH project, I visualized the economic history of Iliff, Colorado - a small agricultural town that experienced dramatic boom and bust cycles over the past 120 years. After working on the Wikipedia article for the town, I realized there were patterns in the data that were difficult to convey through traditional narrative alone.

This project uses data visualization to demonstrate what happened to small agricultural towns in the Great Plains when external forces like railroads, sugar factories, and interstate highways shaped their economic trajectories. The visualizations integrate Census data, agricultural statistics, and historical events to reveal these patterns.

## What's Included

- **Main visualization page** - Interactive charts showing population trends, sugar beet agriculture, and business decline
- **Photo gallery** - Six historical images documenting Iliff's history from John Wesley Iliff to modern infrastructure
- **Interactive timeline** - Filterable events by category (infrastructure, industry, natural disasters, demographics)
- **Detailed sources page** - Complete bibliography with all references from Wikipedia research
- **Dark/light mode toggle** - Accessible theme switching with improved readability
- **Responsive design** - Optimized for desktop, tablet, and mobile viewing

## Tech Stack

- HTML/CSS for the structure and styling
- JavaScript for the interactive features
- Chart.js library for the data visualizations
- Going to host it on GitHub Pages so I can submit the URL

## How to View It Locally

Just open the `index.html` file in any web browser. No server or anything fancy needed.

On Mac:
```
open index.html
```

Or just double-click the file.

## Project Structure

```
/
├── index.html              # Main visualization page
├── gallery.html            # Historical photo gallery
├── sources.html            # Complete bibliography and references
├── css/
│   └── style.css          # Styling with earth tones and dark mode support
├── js/
│   ├── data.js            # Census data and historical event information
│   ├── visualizations.js  # Chart.js configurations and theme management
│   └── theme.js           # Dark mode toggle and settings menu
├── images/                 # Historical photographs and maps
└── README.md              # Project documentation
```

## Deploying to GitHub Pages

Here's how I'm planning to deploy this:

1. Create a new repo on GitHub
2. Push all the files
3. Go to Settings → Pages
4. Set source to main branch
5. Wait a minute or two
6. Site should be live at `https://[username].github.io/[repo-name]/`

Commands:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin [your-repo-url]
git branch -M main
git push -u origin main
```

## Data Sources

All sources compiled during Wikipedia article research:
- U.S. Census Bureau (decennial census data 1900-2020)
- Colorado Encyclopedia (History Colorado)
- U.S. Geological Survey (1965 South Platte River flood documentation)
- National Weather Service (1949 Colorado blizzard records)
- Colorado Department of Transportation (Interstate 76 history)
- Logan County historical records (sugar beet acreage data)
- Complete bibliography available on sources.html page

## Why This is Digital Humanities

Rather than writing a traditional historical narrative, this project applies computational methods to visualize economic patterns across 120 years. The interactive charts reveal how infrastructure decisions, natural disasters, and agricultural industry shifts determined the fate of small agricultural communities. By making these patterns visible through data visualization, the project demonstrates the value of digital tools for humanistic inquiry - showing not just what happened to Iliff, but why small agricultural towns across America followed similar trajectories.

## Implementation Features

Technical elements include:
- CSS custom properties for consistent theming across light and dark modes
- LocalStorage for persistent theme preferences
- Chart.js with custom tooltips and annotations for historical events
- JavaScript event delegation for timeline filters
- Sticky navigation with scroll offset compensation
- Hamburger menu for settings access across all device sizes

## Assignment Info

**Course:** ENGL 326 - Introduction to Digital Humanities
**School:** Kansas State University
**Semester:** Fall 2025

