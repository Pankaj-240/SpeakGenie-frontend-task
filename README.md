# SpeakGenie Frontend Task

A modern React + JavaScript + Tailwind CSS implementation of the SpeakGenie learning platform UI.

**[🚀 Live Demo](https://speakgenie-frontend-task.vercel.app/)**

## Overview

Recreates three key screens from SpeakGenie:
- **Home Screen** - User dashboard with XP progress, action icons, and story carousels
- **Audio Story Player** - Interactive audio story playback interface  
- **Custom Quiz Creator** - Topic selection and difficulty configuration

## Tech Stack

React 18 • JavaScript (JSX) • Vite • Tailwind CSS • React Router • Lucide React

## Quick Start

```bash
# Clone and install
git clone https://github.com/Pankaj-240/SpeakGenie-frontend-task.git
cd Interview-Task
npm install

# Development
npm run dev

# Production build
npm run build
```

## Project Structure

```
src/
├── pages/
│   ├── Home/
│   │   ├── HomePage.jsx                    # Main home page component
│   │   └── components/
│   │       ├── MainActionIcons/            # Video, Peer Call, Stories, AI icons
│   │       ├── MainBox/
│   │       │   ├── AudioStories/           # Story carousel cards
│   │       │   ├── PracticeWithAI/         # AI practice cards
│   │       │   └── PracticeWithHumans/     # Human practice cards
│   │       ├── navbar/                     # Dashboard navbar + XP progress
│   │       └── footer/                     # Footer component
│   ├── CustomQuiz/
│   │   ├── CustomQuizPage.jsx              # Quiz main page
│   │   └── components/
│   │       ├── main/                       # Quiz template cards
│   │       ├── navbar/                     # Quiz navbar
│   │       └── footer/                     # Quiz footer
│   └── AudioStoryPlayer/
│       ├── AudioStoryPlayerPage.jsx        # Player main page
│       └── components/
│           ├── main/                       # Story image, text display
│           ├── navbar/                     # Player navbar
│           └── footer/                     # Player controls
├── components/
│   └── Main.jsx                            # Landing page / router
└── assets/                                 # Images and static files
```

## Features

✅ Responsive (mobile, tablet, desktop)  
✅ Clean component architecture  
✅ Feature-based folder structure  
✅ Utility-first Tailwind CSS  
✅ Client-side routing  
✅ **UI-focused** - Most elements are visual (carousels, cards, progress bars)

## Routes

| Path | Screen |
|------|--------|
| `/` | Landing page |
| `/home` | Home dashboard |
| `/player` | Audio story player |
| `/quiz` | Custom quiz creator |

## Deployment

Deployed on **Vercel**: https://speakgenie-frontend-task.vercel.app/

- Auto-deploys on push to `main`
- Build command: `npm run build`

## Important Details

- **Static UI** - Focus on visual design and layout accuracy. UI elements (buttons, cards, progress bars) are display-only with no interactive functionality
- **No backend** - Static data only, no API integration
- **Mobile-first** - Optimized for small screens
- **Responsive** - Adapts to all device sizes
- **Images** - Uses SpeakGenie CDN

---

**Repository**: https://github.com/Pankaj-240/SpeakGenie-frontend-task  
**Created by**: Pankaj Bisht
