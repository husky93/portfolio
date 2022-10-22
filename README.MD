# Portfolio

My personal portfolio project built with [Vite](https://vitejs.dev/) with use of [React](https://github.com/facebook/react) library and [Typescript](https://www.typescriptlang.org/). The goal was to make interactive website with a lots of interesting effects.

<img src="https://github.com/husky93/portfolio/blob/main/perf.jpg?raw=true">

### Live: [click here](https://msroka.dev)

## Features
- Display Spinner on page load based on React Suspense and components lazy loading.
- Full website responsiveness.
- [Blurred version](https://blurha.sh/) of an image appearing before image loads for better User Experience.
- Animated Hero section main heading, appearing from bottom-right corner on initial page load.
- Alternating Hero Text component - Blur and width transition effect when text is about to change, based on interval.
- Rotating 3D sphere of icons in Hero section.
- Hamburger menu button with custom animation.
- Menu based on perspective change, appearing from underneath the main page content. (On firefox based on Y axis translation, not perspective change the due to browser-specific bug)
- Custom intersection observer hook for sections that rely on it to show content.
- Custom hook calculating offset for sections that use parallax effect to move content.
- Curtain component that reveals About section content whenever it is shown.
- Skills section items with a custom border animation on hover.
- Portfolio section projects layout based on screen width.

 
<img src="https://github.com/husky93/portfolio/blob/main/website.jpg?raw=true"/>

#### Dependencies Used:
- [React](https://github.com/facebook/react)
- [React-DOM](https://github.com/facebook/react/tree/main/packages/react-dom)
- [blurhash](https://blurha.sh/)

#### Dev dependencies:
- [vite](https://github.com/facebook/create-react-app)
- [typescript](https://www.typescriptlang.org/)

#### Assets used:
- [xicons](https://www.xicons.org/#/)