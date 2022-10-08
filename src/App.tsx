import { useState, Suspense, lazy } from 'react';
import Loading from './components/Loading';
import styles from './assets/styles/Home.module.css';

const Menu = lazy(() => import('./components/Menu'));
const Hero = lazy(() => import('./components/Hero'));
const Hamburger = lazy(() => import('./components/Hamburger'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu: React.MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  > = (): void => {
    if (!menuActive) {
      window.scrollTo(0, 0);
      document.body.classList.add('stop-scroll');
    }
    if (menuActive) {
      document.body.classList.remove('stop-scroll');
    }
    setMenuActive((prevState) => !prevState);
  };

  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.container}>
        <Hamburger active={menuActive} handleClick={toggleMenu} />
        <Menu active={menuActive} handleLinkClick={toggleMenu} />
        <main className={`${styles.main} ${menuActive ? styles.active : ''}`}>
          <Hero />
          <About />
          <Skills />
        </main>
      </div>
    </Suspense>
  );
}

export default App;
