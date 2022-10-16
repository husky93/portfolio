import { useState, Suspense, lazy, useRef } from 'react';
import Loading from './components/Loading';
import styles from './assets/styles/Home.module.css';

const Menu = lazy(() => import('./components/menu/Menu'));
const Hero = lazy(() => import('./components/hero/Hero'));
const Hamburger = lazy(() => import('./components/menu/Hamburger'));
const About = lazy(() => import('./components/about/About'));
const Skills = lazy(() => import('./components/skills/Skills'));
const Portfolio = lazy(() => import('./components/portfolio/Portfolio'));
const Contact = lazy(() => import('./components/contact/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu: React.MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  > = (event): void => {
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
          <Portfolio />
          <Contact />
          <Footer />
        </main>
      </div>
    </Suspense>
  );
}

export default App;
