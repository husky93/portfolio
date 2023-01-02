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
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrowupright.svg';
import { ReactComponent as QueryIcon } from '../../assets/icons/react-query.svg';
import { ReactComponent as NodeIcon } from '../../assets/icons/nodejs.svg';
import { ReactComponent as ExpressIcon } from '../../assets/icons/express.svg';
import { ReactComponent as MongoIcon } from '../../assets/icons/mongo.svg';

interface PortfolioProps {}

const Project = lazy(() => import('./Project'));
const Badge = lazy(() => import('../Badge'));
const Button = lazy(() => import('../Button'));

const Portfolio: React.FC<PortfolioProps> = ({}) => {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <h2 className="h2">My Projects</h2>
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
            title="Full-Stack Ecommerce Admin Dashboard"
            description="Admin Dashboard RESTful Full-Stack project based on Typescript and React on frontend and Node.js, Express and MongoDB on backend. CRUD application with JWT Token authentication. This project is a first frontend part of an ecommerce platform based on single API. Second part (store frontend) is still in progress."
            imageName="admin"
            imageBlurHash="L5SF@S_40zyVDN^StRxYInX9M{R*"
            imagePosition="left"
            ghLink="https://github.com/husky93/ecommerce-admin-frontend/"
            liveLink="https://husky93.github.io/ecommerce-admin-frontend/"
            apiLink="https://github.com/husky93/express-shop-api/"
          >
            <Badge>
              <TsIcon /> TypeScript
            </Badge>
            <Badge>
              <ReactIcon /> React
            </Badge>
            <Badge>
              <QueryIcon /> React Query
            </Badge>
            <Badge>
              <CssIcon /> CSS Modules
            </Badge>
            <Badge>
              <ViteIcon /> Vite
            </Badge>
            <Badge>REST API</Badge>
            <Badge>
              <NodeIcon /> Node.js
            </Badge>
            <Badge>
              <ExpressIcon /> Express
            </Badge>
            <Badge>
              <MongoIcon /> MongoDB
            </Badge>
          </Project>
          <Project
            title="Where's Waldo Game"
            description="Where's Waldo image tagging game coded with use of React library and Test-Driven-Development methodology. Find Waldo and his friends and save your time in a scoreboard! The goal of this project was to learn more about TDD with React and about client-server interaction"
            imageName="waldo"
            imageBlurHash="LPOM~fxuaeNG_3RjWBaz~qWBWBxu"
            imagePosition="right"
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
            title="Battleships Game"
            description="A Battleships game web application written fully in “vanilla” JavaScript with use of Test-Driven-Development methodology and OOP principles. Place your ships and play against an advanced AI that chooses which tile to hit based on already hit ship tiles."
            imageName="battleships"
            imageBlurHash="L66*X=oa$;xBo#W-S5oL4,a}StR."
            imagePosition="right"
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
        </div>
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
