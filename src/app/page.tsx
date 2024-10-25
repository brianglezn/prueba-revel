"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
// import Avatar from '@/components/Avatar';
import { getUserDetails } from '@/services/api';
import styles from './page.module.css';

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    // Llamamos a getUserDetails para obtener los detalles del usuario
    const fetchUserDetails = async () => {
      try {
        const userData = await getUserDetails();
        setUser(userData); // Guardamos los detalles del usuario en el estado
        console.log(userData); // Mostramos los detalles del usuario en la consola
      } catch (error) {
        console.error('Error al obtener los detalles del usuario:', error);
      }
    };

    fetchUserDetails();
  }, [router]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {user ? (
          // <Avatar src={user.avatar || '/path-to-avatar-image.jpg'} alt={user.name || 'User Avatar'} size="medium" />
          <></>
        ) : (
          <p>Cargando usuario...</p>
        )}
      </header>

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
