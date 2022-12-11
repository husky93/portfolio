import React, { lazy } from 'react';
import { useObserver } from '../../app/hooks';
import styles from '../../assets/styles/skills/Skills.module.css';
import { ReactComponent as JsIcon } from '../../assets/icons/js.svg';
import { ReactComponent as TsIcon } from '../../assets/icons/typescript.svg';
import { ReactComponent as ReactIcon } from '../../assets/icons/react.svg';
import { ReactComponent as HtmlIcon } from '../../assets/icons/html.svg';
import { ReactComponent as CssIcon } from '../../assets/icons/css.svg';
import { ReactComponent as GitIcon } from '../../assets/icons/git.svg';
import { ReactComponent as NpmIcon } from '../../assets/icons/npm.svg';
import { ReactComponent as ReduxIcon } from '../../assets/icons/redux.svg';
import { ReactComponent as JestIcon } from '../../assets/icons/jest.svg';
import { ReactComponent as TestingIcon } from '../../assets/icons/testing-library.svg';
import { ReactComponent as StyledIcon } from '../../assets/icons/styled.svg';
import { ReactComponent as TailwindIcon } from '../../assets/icons/tailwindcss.svg';
import { ReactComponent as SassIcon } from '../../assets/icons/sass.svg';
import { ReactComponent as WebpackIcon } from '../../assets/icons/webpack.svg';
import { ReactComponent as NodeIcon } from '../../assets/icons/nodejs.svg';
import { ReactComponent as ExpressIcon } from '../../assets/icons/express.svg';
import { ReactComponent as MongoIcon } from '../../assets/icons/mongo.svg';

const SkillsItem = lazy(() => import('./SkillsItem'));

interface SkillsProps {}

const skillsArray: Array<SkillsObject> = [
  { icon: <JsIcon />, title: 'JavaScript' },
  { icon: <TsIcon />, title: 'TypeScript' },
  { icon: <ReactIcon />, title: 'React' },
  { icon: <NodeIcon />, title: 'Node.js' },
  { icon: <ExpressIcon />, title: 'Express' },
  { icon: <HtmlIcon />, title: 'HTML' },
  { icon: <CssIcon />, title: 'CSS' },
  { icon: <GitIcon />, title: 'GIT' },
  { icon: <ReduxIcon />, title: 'Redux' },
  { icon: <JestIcon />, title: 'Jest' },
  { icon: <TestingIcon />, title: 'testing-library' },
  { icon: <StyledIcon />, title: 'styled-components' },
  { icon: <TailwindIcon />, title: 'Tailwind CSS' },
  { icon: <SassIcon />, title: 'Sass' },
  { icon: <WebpackIcon />, title: 'Webpack' },
  { icon: <NpmIcon />, title: 'NPM' },
  { icon: <MongoIcon />, title: 'MongoDB' },
];

const Skills: React.FC<SkillsProps> = ({}) => {
  const { isVisible, hasIntersected, containerRef } = useObserver(0.2);

  return (
    <section
      id="skills"
      aria-label="Skills"
      className={`${styles.skills} ${isVisible ? styles.in_viewport : ''} ${
        hasIntersected ? styles.intersected : ''
      }`}
      ref={containerRef}
    >
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className="h2">Skills</h2>
          <ul className={styles.list}>
            {skillsArray.map((item, index) => (
              <SkillsItem title={item.title} key={`${item.title}-${index}`}>
                {item.icon}
              </SkillsItem>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
