# Boom and Bust: Economic Cycles in Iliff, Colorado (1900-2020)

Digital Humanities project by Evan for ENGL 326, Kansas State University

## About This Project

For my final DH project, I decided to visualize the economic history of Iliff, Colorado - a tiny agricultural town that went through some pretty dramatic boom and bust cycles over the past 120 years. I got interested in this after working on the Wikipedia article for the town and realizing there were all these interesting patterns that were hard to explain just through writing.

The idea was to use data visualization to show what actually happened to small agricultural towns in the Great Plains when things like railroads, sugar factories, and interstate highways came and went. This project uses Census data, agricultural statistics, and historical events to tell the story.

## What's Included

- **Population chart** - Shows how the population changed from 1900-2020 (spoiler: it's a roller coaster)
- **Sugar beet industry chart** - The sugar beet business basically made and then broke this town
- **Interactive timeline** - Click on events to see how each one impacted the town's economy
- **Responsive design** - Works on phones, tablets, and computers

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
├── index.html          # Main page
├── css/
│   └── style.css      # All the styling (went with earth tones)
├── js/
│   ├── data.js        # Census data and event information
│   └── visualizations.js  # Chart code
└── README.md          # This file
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

- U.S. Census Bureau (population data from 1900-2020)
- Colorado Encyclopedia
- U.S. Geological Survey (for the 1965 flood info)
- National Weather Service (1949 blizzard)
- Wikipedia article I edited for class

## Why This is Digital Humanities

Instead of just writing a traditional paper about Iliff's history, I used computational methods to visualize the data and reveal patterns. The charts make it way easier to see how external forces (Interstate 76 bypass, sugar factory closure, etc.) directly impacted population and economic health. It's applying digital tools to humanistic questions about how small towns rise and fall.

## What I Learned

Working on this project taught me:
- How to use Chart.js (it's actually pretty straightforward once you get the hang of it)
- Data visualization can reveal things that narrative history can't show as clearly
- Small agricultural towns across the Great Plains have really similar stories - they all got hit by the same forces (highway bypasses, agricultural consolidation, factory closures)
- Making things responsive is harder than I thought

## Future Ideas

If I had more time, I'd add:
- Comparison with other Colorado towns
- More detailed business data
- Photos from different eras
- Maybe oral history clips from residents

## Assignment Info

**Course:** ENGL 326 - Introduction to Digital Humanities
**School:** Kansas State University
**Semester:** Fall 2025
**Due Date:** December 17, 2025

## References

Check out other K-State DH projects here: https://www.k-state.edu/digitalhumanities/projects.html

Wikipedia article: https://en.wikipedia.org/wiki/Iliff,_Colorado
