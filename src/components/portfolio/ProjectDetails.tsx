import React, { lazy } from 'react';
import styles from '../../assets/styles/portfolio/ProjectDetails.module.css';
import { ReactComponent as GhIcon } from '../../assets/icons/github.svg';
import { ReactComponent as WebIcon } from '../../assets/icons/web.svg';

const Card = lazy(() => import('../Card'));
const Button = lazy(() => import('../Button'));

interface ProjectDetailsProps {
  children: React.ReactNode;
  title: string;
  description: string;
  ghLink?: string;
  liveLink?: string;
  hidden?: boolean;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  children,
  title,
  description,
  ghLink,
  liveLink,
  hidden,
}) => {
  return (
    <Card>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.technologies}>
        <span className={styles.subtext}>Technologies:</span>
        {children}
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.ui}>
        {ghLink && (
          <Button navigateTo={ghLink} hidden={hidden}>
            <GhIcon /> Code
          </Button>
        )}
        {liveLink && (
          <Button navigateTo={liveLink} hidden={hidden}>
            <WebIcon /> Live Demo
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ProjectDetails;
