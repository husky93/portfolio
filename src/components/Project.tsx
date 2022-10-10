import React, { lazy } from 'react';
import { useParallax, useObserver } from '../app/hooks';
import styles from '../assets/styles/Project.module.css';

const ProjectDetails = lazy(() => import('./ProjectDetails'));

const Image = lazy(() => import('./Image'));

interface ProjectProps {
  imagePosition: 'left' | 'right';
  imageName: string;
  children: React.ReactNode;
  title: string;
  description: string;
  ghLink?: string;
  liveLink?: string;
}

const Project: React.FC<ProjectProps> = ({
  children,
  imagePosition,
  imageName,
  title,
  description,
  ghLink,
  liveLink,
}) => {
  const { containerRef, isVisible } = useObserver(1);
  const renderDetails = () => {
    return (
      <ProjectDetails
        title={title}
        description={description}
        ghLink={ghLink}
        liveLink={liveLink}
      >
        {children}
      </ProjectDetails>
    );
  };
  const renderImage = () => {
    return <Image alt="" imgName={imageName} />;
  };

  return (
    <div
      className={`${styles.container} ${isVisible ? styles.in_viewport : ''}`}
    >
      <div
        className={`${styles.left} ${
          imagePosition === 'left' ? styles.image : ''
        }`}
      >
        {imagePosition === 'left' ? renderImage() : renderDetails()}
      </div>
      <div
        className={`${styles.right} ${
          imagePosition === 'right' ? styles.image : ''
        }`}
      >
        {imagePosition === 'right' ? renderImage() : renderDetails()}
      </div>
      <div ref={containerRef}></div>
    </div>
  );
};

export default Project;
