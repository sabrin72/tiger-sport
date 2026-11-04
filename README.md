# Tiger Sport

Tiger Sport is a sports and fitness website built with React and TypeScript. The site is organized as a single-page experience with sections for the gym introduction, classes, schedule, instructors, and contact information.

## Tech stack

- React 18
- TypeScript
- Vite
- Tailwind CSS

## Getting started

### Requirements

Install [Node.js](https://nodejs.org/) and npm.

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will print the local URL in the terminal. Open that URL in your browser to view the site.

## Production build

Create an optimized production build with:

```bash
npm run build
```

The generated files are placed in the `dist/` directory.

## Project structure

```text
src/
├── app/
│   ├── components/   # Page sections and UI components
│   └── App.tsx       # Composes the main page
├── styles/           # Application styles
└── main.tsx           # Application entry point
```

The main page currently brings together the Hero, About, Classes, Schedule, Instructors, Contact, and Footer sections.
