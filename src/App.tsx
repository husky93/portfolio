import { useState, Suspense, lazy } from 'react';
import Loading from './components/Loading';
import styles from './assets/styles/Home.module.css';

const Hero = lazy(() => import('./components/Hero'));
const Hamburger = lazy(() => import('./components/Hamburger'));

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu: React.MouseEventHandler<HTMLButtonElement> = (): void => {
    setMenuActive((prevState) => !prevState);
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
