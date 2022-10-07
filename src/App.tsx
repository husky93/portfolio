import { useState, Suspense, lazy } from 'react';
import Loading from './components/Loading';
import styles from './assets/styles/Home.module.css';

const Hero = lazy(() => import('./components/Hero'));
const Hamburger = lazy(() => import('./components/Hamburger'));

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu: React.MouseEventHandler<HTMLButtonElement> = (): void => {
    if (!menuActive) {
      window.scrollTo(0, 0);
      document.body.classList.add('stop-scroll');
    }
    if (menuActive) {
      document.body.classList.remove('stop-scroll');
    }
    setMenuActive((prevState) => !prevState);
  };

  const preventScroll = (event: Event): void => {
    event.preventDefault();
  };

  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Hamburger active={menuActive} handleClick={toggleMenu} />
          <Hero />
        </main>
      </div>
    </Suspense>
  );
}

export default App;
