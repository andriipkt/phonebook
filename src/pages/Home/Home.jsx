import { useEffect } from 'react';
import css from './Home.module.css';

export default function Home() {
  useEffect(() => {
    document.body.classList.add('show-background');

    return () => {
      document.body.classList.remove('show-background');
    };
  }, []);

  return (
    <div className={css.homeContainer}>
      <h1 className={css.title}>Welcome!</h1>
      <p className={css.text}>Phonebook is a contacts notebook app</p>
    </div>
  );
}
