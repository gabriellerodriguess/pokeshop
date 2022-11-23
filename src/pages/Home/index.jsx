import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Pokemons from '../../components/Pokemons'
import axios from 'axios'
import './styles.css'


export default function Home() {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getInfoPokemon()
    }, [])

    function getInfoPokemon() { 
        let endpoints = []

        for(let i = 1; i <= 50; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        const result = axios.all(endpoints.map(endpoint => axios.get(endpoint))).then(response => setPokemons(response))
       
        return result
    }

    return (
        <>
            <Header />
            {pokemons && pokemons.map((item,index) => (
                <Pokemons name={item.data.name} abilities={item.data.abilities[0].ability.name} price={() => Math.floor(Math.random() * 10000)} urlImage={item.data.sprites.front_default} key={index} />
            ))}
       </>
    )
}