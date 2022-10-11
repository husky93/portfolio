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
  const { sectionRef, offset } = useParallax();

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

  const setTransform = (position: 'left' | 'right') => {
    return isVisible && imagePosition === position
      ? {
          transform: `translateX(0px) translateY(${offset / 20}px)`,
        }
      : {};
  };

  return (
    <div
      className={`${styles.container} ${isVisible ? styles.in_viewport : ''}`}
      ref={sectionRef}
    >
      <div
        className={`${styles.left} ${
          imagePosition === 'left' ? styles.image : ''
        }`}
        style={setTransform('left')}
      >
        {imagePosition === 'left' ? renderImage() : renderDetails()}
      </div>
      <div ref={containerRef}></div>
      <div
        className={`${styles.right} ${
          imagePosition === 'right' ? styles.image : ''
        }`}
        style={setTransform('right')}
      >
        {imagePosition === 'right' ? renderImage() : renderDetails()}
      </div>
    </div>
  );
};

export default Project;
