import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import styles from './page.module.css';

export default async function Home() {
  const cookieStore = cookies();
  const token = (await cookieStore).get('token')?.value;

  if (!token) {
    return redirect('/login');
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}></header>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>The Last of Us</h1>
          <p className={styles.heroDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet lorem vel arcu fermentum fringilla.
          </p>
          <button className={styles.button}>Discover</button>
        </div>
      </section>
    </div>
  );
}
