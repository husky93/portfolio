import React, { lazy } from 'react';
import styles from '../../assets/styles/portfolio/Portfolio.module.css';
import { ReactComponent as ReactIcon } from '../../assets/icons/react.svg';

interface PortfolioProps {}

const Project = lazy(() => import('./Project'));
const Badge = lazy(() => import('../Badge'));

const Portfolio: React.FC<PortfolioProps> = ({}) => {
  return (
    <section className={styles.projects}>
      <h2 className="h2">My Projects</h2>
      <Project
        title="Portfolio"
        description="..."
        imageName="placeholder"
        imagePosition="left"
        ghLink="https://github.com/husky93/portfolio"
      >
        <Badge>
          <ReactIcon /> React
        </Badge>
      </Project>
      <Project
        title="Social Blogging Platform"
        description="..."
        imageName="placeholder"
        imagePosition="right"
        ghLink="https://github.com/husky93/social-blogging-platform"
        liveLink="https://husky93.github.io/social-blogging-platform/"
      >
        <Badge>
          <ReactIcon /> React
        </Badge>
      </Project>
      <Project
        title="Where's Waldo Game"
        description="..."
        imageName="placeholder"
        imagePosition="left"
        ghLink="https://github.com/husky93/photo-tagging-app"
        liveLink="https://husky93.github.io/photo-tagging-app/"
      >
        <Badge>
          <ReactIcon /> React
        </Badge>
      </Project>
      <Project
        title="Store Frontend"
        description="..."
        imageName="placeholder"
        imagePosition="right"
        ghLink="https://github.com/husky93/storefront"
        liveLink="https://husky93.github.io/storefront/"
      >
        <Badge>
          <ReactIcon /> React
        </Badge>
      </Project>
      <Project
        title="Battleships Game"
        description="..."
        imageName="placeholder"
        imagePosition="left"
        ghLink="https://github.com/husky93/battleship-game"
        liveLink="https://husky93.github.io/battleship-game/"
      >
        <Badge>
          <ReactIcon /> React
        </Badge>
      </Project>
    </section>
  );
};

export default Portfolio;
