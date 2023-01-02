import React, { useState, useEffect, lazy } from 'react';
import styles from '../../assets/styles/hero/Sphere.module.css';
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
import { ReactComponent as ViteIcon } from '../../assets/icons/vite.svg';
import { ReactComponent as NextIcon } from '../../assets/icons/nextjs.svg';
import { ReactComponent as FirebaseIcon } from '../../assets/icons/firebase.svg';
import { ReactComponent as VueIcon } from '../../assets/icons/vue.svg';
import { ReactComponent as NodeIcon } from '../../assets/icons/nodejs.svg';
import { ReactComponent as ExpressIcon } from '../../assets/icons/express.svg';
import { ReactComponent as Mongo } from '../../assets/icons/mongo.svg';

const iconArray: Array<React.ReactNode> = [
  <JsIcon />,
  <TsIcon />,
  <ReactIcon />,
  <HtmlIcon />,
  <CssIcon />,
  <GitIcon />,
  <NpmIcon />,
  <ReduxIcon />,
  <JestIcon />,
  <TestingIcon />,
  <StyledIcon />,
  <TailwindIcon />,
  <SassIcon />,
  <WebpackIcon />,
  <ViteIcon />,
  <NextIcon />,
  <FirebaseIcon />,
  <VueIcon />,
  <NodeIcon />,
  <ExpressIcon />,
  <Mongo />,
];

interface SphereProps {}

const Sphere: React.FC<SphereProps> = ({}) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.sphere}>
        <div className={styles.container}>
          {iconArray.map((item, i) => (
            <div
              className={`${styles.item} ${active ? styles.active : ''}`}
              key={`sphere-item-${i}`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sphere;
