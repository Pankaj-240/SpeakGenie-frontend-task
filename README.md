# SpeakGenie Frontend Task

A modern React + TypeScript + Tailwind CSS implementation of the SpeakGenie learning platform UI.

## 🚀 Live Demo

**[View Live on Vercel](https://speakgenie-frontend-task.vercel.app/)**

## 📋 Overview

This project recreates three key screens from the SpeakGenie platform:
- **Home Screen** - User dashboard with XP progress, action icons, and story carousels
- **Audio Story Player** - Interactive audio story playback interface
- **Custom Quiz Creator** - Topic selection and difficulty configuration

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **React Router** - Client-side routing
- **Lucide React** - Icons

## 📁 Project Structure

```
Interview-Task/
├── src/
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── HomePage.jsx
│   │   │   └── components/
│   │   │       ├── MainActionIcons/
│   │   │       ├── MainBox/
│   │   │       │   ├── AudioStories/
│   │   │       │   ├── PracticeWithAI/
│   │   │       │   └── PracticeWithHumans/
│   │   │       ├── footer/
│   │   │       └── navbar/
│   │   ├── CustomQuiz/
│   │   │   ├── CustomQuizPage.jsx
│   │   │   └── components/
│   │   │       ├── main/
│   │   │       ├── navbar/
│   │   │       └── footer/
│   │   └── AudioStoryPlayer/
│   │       ├── AudioStoryPlayerPage.jsx
│   │       └── components/
│   │           ├── main/
│   │           ├── navbar/
│   │           └── footer/
│   ├── components/
│   │   └── Main.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── assets/
├── public/
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Pankaj-240/SpeakGenie-frontend-task.git
cd Interview-Task

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser: http://localhost:5173/
```

### Build for Production

```bash
npm run build
```

## 🎯 Key Features

✅ Responsive design for mobile, tablet, and desktop  
✅ Clean, modular component architecture  
✅ Full TypeScript type safety  
✅ Utility-first Tailwind CSS styling  
✅ Client-side routing with React Router  
✅ Interactive carousels and UI elements  

## 📐 Design Decisions

### Component Organization
- **Feature-based structure** - Each page owns its components
- **PascalCase naming** - Consistent, clear naming convention
- **Single responsibility** - Each component has one purpose
- **Props-based configuration** - Reusable components

### Styling
- **Tailwind utility-first** - No custom CSS bloat
- **Mobile-first responsive** - Optimized for all screen sizes
- **Consistent branding** - Green palette (#16BF75, #189F5A)

## 📱 Responsive Coverage

| Breakpoint | Status |
|-----------|--------|
| Mobile (< 640px) | ✅ Primary design |
| Tablet (640px - 1024px) | ✅ Optimized |
| Desktop (> 1024px) | ✅ Full-width |

## 🔄 Routes

| Route | Screen |
|-------|--------|
| `/` | Landing page |
| `/home` | Home dashboard |
| `/player` | Audio story player |
| `/quiz` | Custom quiz creator |

## 📦 Tech Details

- **Framework**: React 18 + Vite
- **Language**: JavaScript/TypeScript
- **Styling**: Tailwind CSS 3.x
- **Routing**: React Router 6.x
- **Icons**: Lucide React

## 🚀 Deployment

Deployed on **Vercel** with automatic updates on every push to `main`.

**Live URL**: https://speakgenie-frontend-task.vercel.app/

## 📋 Evaluation Criteria

| Criteria | Status |
|----------|--------|
| UI Accuracy | ✅ Pixel-close implementation |
| Code Quality | ✅ Clean, modular structure |
| TypeScript | ✅ Full type safety |
| Tailwind Usage | ✅ Utility-first, maintainable |
| Responsiveness | ✅ Works on all devices |
| Professionalism | ✅ Production-ready |

## 🔗 Links

- **GitHub Repository**: https://github.com/Pankaj-240/SpeakGenie-frontend-task
- **Live Demo**: https://speakgenie-frontend-task.vercel.app/
- **Assignment Brief**: SpeakGenie Frontend Engineer Interview Task

## 📝 Notes

- All screens use static data (no API backend required)
- Mobile-first design approach
- External images from SpeakGenie CDN
- Routes accessible without authentication

---

**Created by**: Pankaj Bisht  
**Last Updated**: December 7, 2025
