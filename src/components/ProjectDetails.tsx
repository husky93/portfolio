import React, { lazy } from 'react';
import styles from 'ProjectDetails.module.css';

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
      <span className={styles.subtext}>Technologies used:</span>
      <div className={styles.technologies}>{children}</div>
      <p className={styles.description}>{description}</p>
    </Card>
  );
};

export default ProjectDetails;
