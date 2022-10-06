import { useState, Suspense, lazy } from 'react';
import Loading from './components/Loading';
import styles from './assets/styles/Home.module.css';

const Hero = lazy(() => import('./components/Hero'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Loading />
          <Hero />
        </main>
      </div>
    </Suspense>
  );
}

export default App;
