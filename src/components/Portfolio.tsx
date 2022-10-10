import React, { lazy } from 'react';
import styles from '../assets/styles/Portfolio.module.css';
import { ReactComponent as ReactIcon } from '../assets/icons/react.svg';

interface PortfolioProps {}

const Project = lazy(() => import('./Project'));
const Badge = lazy(() => import('./Badge'));

const Portfolio: React.FC<PortfolioProps> = ({}) => {
  return (
    <section className={styles.projects}>
      <Project
        title="Portfolio"
        description="..."
        imageName="placeholder"
        imagePosition="left"
      >
        <Badge>
          <ReactIcon /> React
        </Badge>
      </Project>
      <Project
        title="Portfolio"
        description="..."
        imageName="placeholder"
        imagePosition="right"
      >
        <Badge>
          <ReactIcon /> React
        </Badge>
      </Project>
    </section>
  );
};

export default Portfolio;
