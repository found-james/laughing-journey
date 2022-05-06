import Head from 'next/head';
import Link from 'next/Link';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      const resp = await fetch ("https://studious-octo-parakeet-oh3rwjnti-jamescodesandbox-gmailcom.vercel.app/index.json");

      setPokemon( await resp.json());
    }

    getPokemon();
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemondongo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.grid}>
        {
          pokemon.map( pokemon => (
            <div className={styles.card} key={pokemon.id}>
              <Link href={`/pokemon/${pokemon.id}`}>
                <a>
                  <img src={`https://studious-octo-parakeet-oh3rwjnti-jamescodesandbox-gmailcom.vercel.app/${pokemon.image}`} alt={pokemon.name}
                  />
                  <h3>{pokemon.name}</h3>
                </a>
              </Link>
            </div>
          ))
        }
  
      </section>
    </div>
  )
}
