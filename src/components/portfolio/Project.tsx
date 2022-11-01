import React, { lazy, useRef, useEffect } from 'react';
import { useParallax, useObserver } from '../../app/hooks';
import styles from '../../assets/styles/portfolio/Project.module.css';

const ProjectDetails = lazy(() => import('./ProjectDetails'));
const Image = lazy(() => import('../Image'));

interface ProjectProps {
  imagePosition: 'left' | 'right';
  imageName: string;
  imageBlurHash: string;
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
  imageBlurHash,
  title,
  description,
  ghLink,
  liveLink,
}) => {
  const { containerRef, isVisible, hasIntersected } = useObserver(0.4);
  const { sectionRef, offset, windowHeight } = useParallax();
  const projectRef = useRef(null!);

  useEffect(() => {
    containerRef.current = projectRef.current;
    sectionRef.current = projectRef.current;
  }, []);

  const renderDetails = () => {
    return (
      <ProjectDetails
        title={title}
        description={description}
        ghLink={ghLink}
        liveLink={liveLink}
        hidden={!hasIntersected}
      >
        {children}
      </ProjectDetails>
    );
  };
  const renderImage = () => {
    return <Image alt="" imgName={imageName} blurHash={imageBlurHash} />;
  };

  const setTransform = (position: 'left' | 'right', rotation?: number) => {
    let lastTranslation;
    if (hasIntersected && !isVisible && imagePosition === position) {
      return {
        transform: `translateX(0px) translateY(${lastTranslation}px)`,
      };
    }
    if (hasIntersected && imagePosition !== position) {
      return {
        transform: `translateX(0px) translateY(0px)`,
      };
    }
    const offsetRotation =
      rotation && rotation + rotation * (offset / windowHeight.current);
    if (hasIntersected && imagePosition === position) {
      lastTranslation = offset / 35;
      return {
        transform: `translateX(0px) translateY(${offset / 35}px) ${
          rotation ? 'rotate(' + offsetRotation + 'deg)' : ''
        }`,
      };
    }
    return {};
  };

  return (
    <div
      className={`${styles.container} ${isVisible ? styles.in_viewport : ''}`}
      ref={projectRef}
    >
      <div
        className={`${styles.left} ${
          imagePosition === 'left' ? styles.image : ''
        }`}
        style={setTransform('left', -1)}
      >
        {imagePosition === 'left' ? renderImage() : renderDetails()}
      </div>
      <div
        className={`${styles.right} ${
          imagePosition === 'right' ? styles.image : ''
        }`}
        style={setTransform('right', 1)}
      >
        {imagePosition === 'right' ? renderImage() : renderDetails()}
      </div>
    </div>
  );
};

export default Project;
