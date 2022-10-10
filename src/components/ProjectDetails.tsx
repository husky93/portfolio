import React, { lazy } from 'react';
import styles from '../assets/styles/ProjectDetails.module.css';

const Card = lazy(() => import('./Card'));

interface ProjectDetailsProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  children,
  title,
  description,
}) => {
  return (
    <Card>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.technologies}>
        <span className={styles.subtext}>Technologies:</span>
        {children}
      </div>
      <p className={styles.description}>{description}</p>
    </Card>
  );
};

export default ProjectDetails;
