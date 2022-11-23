import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Pokemons from '../../components/Pokemons'
import Footer from '../../components/Footer'
import axios from 'axios'
import './styles.css'


export default function Home() {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        console.log(pokemons, `pokjjens`)
        getInfoPokemon()
    }, [])

    function getInfoPokemon() { 
        let endpoints = []

        for(let i = 1; i <= 50; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        const result = axios.all(endpoints.map(endpoint => axios.get(endpoint))).then(response => setPokemons(response))
        console.log(pokemons)

        return result
    }

    return (
        <>
            <Header />
            <Pokemons pokemons={pokemons} color={() => Math.floor(Math.random() * 5)}/> 
            <Footer />
       </>
    )
}