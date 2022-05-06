import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/Details.module.css";

export default function Details () {
    const {
        query: { id }
    } = useRouter();

    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        async function getPokemon() {
            try {
            const resp = await fetch(`https://studious-octo-parakeet-oh3rwjnti-jamescodesandbox-gmailcom.vercel.app/pokemon/${id}.json`);

            setPokemon( await resp.json());
            } catch (err) {
                console.log(err.message);
            }
        }

        if (id) {
            getPokemon();
        }

        getPokemon();

        if (!pokemon) {
            return null;
        }

    }, [id]);

    return (
        <div>
            <Head>
                <title>{pokemon.name}</title>
            </Head>
            <div>
                <Link href="/">
                    <a>back to home</a>
                </Link>
            </div>
        </div>
    )
}