import Head from 'next/head';
import Link from 'next/Link';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [pokemon, setPokemon] = useState(null);

  async function getPokemon() {

    const resp = await fetch ("https://studious-octo-parakeet.vercel.app/index.json");

    setPokemon( await resp.json());
  }


  useEffect(() => {
    getPokemon();
  }, []);


  const loaded = () => (
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
                  <img src={`https://studious-octo-parakeet.vercel.app//${pokemon.image}`} alt={pokemon.name}
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

  const loading = () => (

    <div className={styles.container}>

      <Head>
        <title>Pokemondongo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.grid}>

      <h1>deCbra</h1>
  
      </section>
    </div>

  )
  
  return pokemon ? loaded () : loading ();

}
