import Head from 'next/head'
import styles from '../styles/Home.module.css'
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
      <section>
        {JSON.stringify(pokemon)}
      </section>
    </div>
  )
}
