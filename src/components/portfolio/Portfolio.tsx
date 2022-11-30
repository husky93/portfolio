import React, { lazy } from 'react';
import styles from '../../assets/styles/portfolio/Portfolio.module.css';
import { ReactComponent as ReactIcon } from '../../assets/icons/react.svg';
import { ReactComponent as ViteIcon } from '../../assets/icons/vite.svg';
import { ReactComponent as TsIcon } from '../../assets/icons/typescript.svg';
import { ReactComponent as CssIcon } from '../../assets/icons/css.svg';
import { ReactComponent as ReduxIcon } from '../../assets/icons/redux.svg';
import { ReactComponent as TailwindIcon } from '../../assets/icons/tailwindcss.svg';
import { ReactComponent as FirebaseIcon } from '../../assets/icons/firebase.svg';
import { ReactComponent as JestIcon } from '../../assets/icons/jest.svg';
import { ReactComponent as WebpackIcon } from '../../assets/icons/webpack.svg';
import { ReactComponent as JsIcon } from '../../assets/icons/js.svg';
import { ReactComponent as TestingIcon } from '../../assets/icons/testing-library.svg';
import { ReactComponent as StyledIcon } from '../../assets/icons/styled.svg';
import { ReactComponent as VueIcon } from '../../assets/icons/vue.svg';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrowupright.svg';

interface PortfolioProps {}

const Project = lazy(() => import('./Project'));
const Badge = lazy(() => import('../Badge'));
const Button = lazy(() => import('../Button'));

const Portfolio: React.FC<PortfolioProps> = ({}) => {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.content}>
        <h2 className="h2">My Projects</h2>
        <Project
          title="Portfolio"
          description="This is the website you're on right now! The goal was to make an interactive, responsive portfolio website. Something caught your attention? See how I programmed it by clicking Code button below!"
          imageName="portfolio"
          imageBlurHash="L8Q,USITIB%M%#W;ayWB~q%2%LR."
          imagePosition="left"
          ghLink="https://github.com/husky93/portfolio"
        >
          <Badge>
            <TsIcon /> TypeScript
          </Badge>
          <Badge>
            <ReactIcon /> React
          </Badge>
          <Badge>
            <CssIcon /> CSS Modules
          </Badge>
          <Badge>
            <ViteIcon /> Vite
          </Badge>
        </Project>
        <Project
          title="Social Blogging Platform"
          description="Social Blogging Platform inspired by medium.com and dev.to. The goal was to program as much of core functionality of such platform in a limited time. You can login, add new posts, comment, bookmark and like them. For full list of features you can read project documentation by clicking Code button below."
          imageName="blog"
          imageBlurHash="L3SigR^+%h_Mx[j^9F9Z_1%MRhD%"
          imagePosition="right"
          ghLink="https://github.com/husky93/social-blogging-platform"
          liveLink="https://husky93.github.io/social-blogging-platform/"
        >
          <Badge>
            <TsIcon /> TypeScript
          </Badge>
          <Badge>
            <ReactIcon /> React
          </Badge>
          <Badge>
            <ReduxIcon /> Redux-Toolkit
          </Badge>
          <Badge>
            <TailwindIcon /> TailwindCSS
          </Badge>
          <Badge>
            <ViteIcon /> Vite
          </Badge>
          <Badge>
            <FirebaseIcon /> Firebase
          </Badge>
        </Project>
        <Project
          title="Where's Waldo Game"
          description="Where's Waldo image tagging game coded with use of React library and Test-Driven-Development methodology. Find Waldo and his friends and save your time in a scoreboard! The goal of this project was to learn more about TDD with React and about client-server interaction"
          imageName="waldo"
          imageBlurHash="LPOM~fxuaeNG_3RjWBaz~qWBWBxu"
          imagePosition="left"
          ghLink="https://github.com/husky93/photo-tagging-app"
          liveLink="https://husky93.github.io/photo-tagging-app/"
        >
          <Badge>
            <JsIcon /> JavaScript
          </Badge>
          <Badge>
            <ReactIcon /> React
          </Badge>
          <Badge>
            <StyledIcon /> styled-components
          </Badge>
          <Badge>
            <JestIcon /> jest
          </Badge>
          <Badge>
            <TestingIcon /> testing-library
          </Badge>
          <Badge>
            <FirebaseIcon /> Firebase
          </Badge>
        </Project>
        <Project
          title="Store Frontend"
          description="Interactive Frontend of a Store coded with use of React library and Test-Driven-Development methodology. Goal of this project was to get used with routing in React and practice React functional component hooks usage as well as responsive styling and writing unit tests for React components."
          imageName="store"
          imageBlurHash="L2QJfm000000o|t7.8tRxbpG~Xx["
          imagePosition="right"
          ghLink="https://github.com/husky93/storefront"
          liveLink="https://husky93.github.io/storefront/"
        >
          <Badge>
            <JsIcon /> JavaScript
          </Badge>
          <Badge>
            <ReactIcon /> React
          </Badge>
          <Badge>
            <JestIcon /> jest
          </Badge>
          <Badge>
            <TestingIcon /> testing-library
          </Badge>
        </Project>
        <Project
          title="Battleships Game"
          description="A Battleships game web application written fully in “vanilla” JavaScript with use of Test-Driven-Development methodology and OOP principles. Place your ships and play against an advanced AI that chooses which tile to hit based on already hit ship tiles."
          imageName="battleships"
          imageBlurHash="L66*X=oa$;xBo#W-S5oL4,a}StR."
          imagePosition="left"
          ghLink="https://github.com/husky93/battleship-game"
          liveLink="https://husky93.github.io/battleship-game/"
        >
          <Badge>
            <JsIcon />
            JavaScript
          </Badge>
          <Badge>
            <WebpackIcon /> webpack
          </Badge>
          <Badge>
            <JestIcon /> jest
          </Badge>
        </Project>
        <Project
          title="Stock Trading App"
          description="A stock trading SPA made with use of Vue.js and Vuex as a centralized state container. Purpose of the project was to get familiar with Vue.js framework."
          imageName="stock"
          imageBlurHash="L13+y2IU8w%2QBIU%|xbXRVttQfk"
          imagePosition="right"
          ghLink="https://github.com/husky93/vue-stock-trader"
          liveLink="https://husky93.github.io/vue-stock-trader/"
        >
          <Badge>
            <JsIcon /> JavaScript
          </Badge>
          <Badge>
            <VueIcon /> Vue.js
          </Badge>
          <Badge>
            <VueIcon /> Vuex
          </Badge>
          <Badge>
            <VueIcon /> vue-router
          </Badge>
        </Project>
      </div>
      <div className={styles.viewmore}>
        <Button navigateTo="https://github.com/husky93?tab=repositories">
          View More <ArrowIcon />
        </Button>
      </div>
    </section>
  );
};

export default Portfolio;
