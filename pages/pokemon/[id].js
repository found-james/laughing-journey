import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/Details.module.css";

export default function Details () {
    const {
        query: { id }
    } = useRouter();

    const [pokemon, setPokemon] = useState(null);

    async function getPokemon() {
            const resp = await fetch(`https://studious-octo-parakeet-oh3rwjnti-jamescodesandbox-gmailcom.vercel.app/pokemon/${id}.json`);
            setPokemon( await resp.json());
    }

    useEffect(() => {
        
        if (id) {
        getPokemon();
        }

        
    }, [id]);


    const loaded = () => {
        return (
            <div>
              <Head>
                <title>{pokemon.name}</title>
              </Head>
              <div>
                <Link href="/">
                  <a>Back to Home</a>
                </Link>
              </div>
              <div className={styles.layout}>
                <div>
                  <img
                    className={styles.picture}
                    src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                    alt={pokemon.name.english}
                  />
                </div>
                <div>
                  <div className={styles.name}>{pokemon.name}</div>
                  <div className={styles.type}>{pokemon.type.join(", ")}</div>
                  <table>
                    <thead className={styles.header}>
                      <tr>
                        <th>Name</th>
                        <th>Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pokemon.stats.map(({ name, value }) => (
                        <tr key={name}>
                          <td className={styles.attribute}>{name}</td>
                          <td>{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          );
    }

    const loading = () => {
        return <p>loading</p>
    }

    return pokemon && pokemon.name ? loaded () : loading ();
    
}