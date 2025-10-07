# JuiceBox Chat Bot
A front-end web application built using Next.js and TypeScript, designed to demonstrate pixel-perfect UI implementation, accessibility best practices, and interactive animations with GSAP, Lottie, Swiper, and Lenis.

## Overview

This project is based on a provided Figma design and includes the following sections:

1. Homepage
- Lottie animation integrated with GSAP and smooth scrolling via Lenis.
- “Start” button that navigates to the walkthrough or form section.

2. Walkthrough Tutorial Screens
- A set of tutorial slides built with Swiper.js.
- “Get Started” button on the last slide navigates to the multistep form.

3. Multistep Form
- Collects user data (e.g., name, email).
- Validated inputs with accessible labels, tab order, and error messages.
- Built using reusable form components and styled with CSS variables.

4. Results Page
- Displays a summary of the user’s input.
- Includes a Lottie animation for visual feedback.

## Tech Stack
| Category | Tools/Libraries |
| ----------- | ----------- |
| Framework | Next.js + Typescript |
| Animation |	GSAP, Lottie, Lenis |
| UI / Styling | CSS Variables, Tailwind CSS (optional) |
| Components | Reusable React components |
| Interaction | Swiper.js |
| Accessibility | Semantic HTML, focus states, ARIA labels |

## Getting Started
1. Clone the repository
```
git clone https://github.com/your-username/interactive-web-app.git
cd interactive-web-app
```

2. Install dependencies
- Make sure you have Node.js ≥ 18 and npm or yarn installed.
```
npm install
# or
yarn install
```

3. Run the development server
```
npm run dev
# or
yarn dev
```

Then open http://localhost:3000 in your browser.

## Project Structure
```
src/
├── app/
│   ├── layout.tsx           # Global layout
│   ├── page.tsx             # Homepage with Lottie animation
│   ├── walkthrough/         # Swiper walkthrough screens
│   ├── form/                # Multistep form
│   └── results/             # Results page with summary
│
├── components/
│   ├── atoms/               # Reusable basic UI elements (Button, Input)
│   ├── molecules/           # Combinations of atoms (FormField, StepIndicator)
│   ├── organisms/           # Complex UI blocks (Navbar, WalkthroughSlider)
│   └── lottie/              # Lottie animation wrapper
│
├── styles/                  # Global styles & CSS variables
├── utils/                   # Helper functions
└── public/                  # Static assets (Lottie JSON, images)
```

## Key Implementation Details
1. Lottie Integration  
Lottie animations are imported as .json files and rendered using either:
- lottie-react (React wrapper), or
- lottie-web with useEffect for manual control.

2. GSAP + Lenis
- GSAP controls animation timelines and transitions.
- Lenis provides smooth scrolling behavior on the homepage.

3. Swiper Tutorial
- Built with Swiper.js and includes navigation buttons + pagination dots.
- “Get Started” button appears only on the last slide.

4. Multistep Form
- Includes validation and accessibility.
- Uses reusable components for inputs and buttons.
- Uses CSS variables for theme consistency.

## Accessibility Notes
- Semantic HTML tags used for structure.
- Keyboard navigable (Tab, Enter, Space).
- Focus states visible and clearly styled.
- ARIA labels applied where necessary (especially on buttons and navigation).

## Scripts
| Command |	Description |
| -------- | -------- |
| ```npm run dev``` |	Start development server |
| ```npm run build``` |	Build for production |
| ```npm start``` |	Run production build |