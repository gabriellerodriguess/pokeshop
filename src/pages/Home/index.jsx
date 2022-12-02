import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Pokemons from '../../components/PokemonsCard'
import Footer from '../../components/Footer'
import LoadingPokemons from '../../components/LoadingPokemons'
import { MiniCart } from '../../components/MiniCart'
import axios from 'axios'
import './styles.css'


export default function Home() {
    const [pokemons, setPokemons] = useState([])
    const [pokemon, setPokemon] = useState([])
    const [handleCart, setHandleCart] = useState(false)
    const [totalPrice, setTotalPrice] = useState(null)
    const [loadingCard, setLoadingCard] = useState(true)

    useEffect(() => {
        getInfoPokemon()
    }, [])

    useEffect(() => {
        handleTotalPrice()
    }, [pokemon])

    function getInfoPokemon() { 
        let endpoints = []
        for(let i = 1; i <= 80; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        const result = axios.all(endpoints.map(endpoint => axios.get(endpoint))).then(response => {
            setPokemons(response)
            setLoadingCard(false)
        })
        return result
    }

    function addPokemonInCart(item) {
        setHandleCart(true)        

        const object = {
            img: item.data.sprites.front_default,
            name: item.data.name,
            ability: item.data.abilities[0].ability.name,
            price: item.data.base_experience,
            id: item.data.id,
        }

        const pokemonIsDuplicated = pokemon.some(pokemonDuplicated => pokemonDuplicated.id === item.data.id)

        if(item && !pokemonIsDuplicated) {
            setPokemon([...pokemon, object])
        }
    }

    function removePokemonInCart(item) {
        const updateArrPokemon = pokemon.filter(pokemonClicked => pokemonClicked.id !== item.id)
        setPokemon(updateArrPokemon)
    }

    function handleCloseCart() {
        setHandleCart(false)
    }
    
   function handleTotalPrice() {
        const sumPrice = pokemon.reduce((initialValue, finalValue) => initialValue + finalValue.price, 0)
        setTotalPrice(sumPrice)
    }
    
    return (
        <>
            <Header itemsCart={pokemon} dispatch={() => setHandleCart(!handleCart)}/>
            {loadingCard &&
                <LoadingPokemons /> 
            }
            <Pokemons dispatch={(pokemon) => addPokemonInCart(pokemon)} pokemons={pokemons} color={() => Math.floor(Math.random() * 5)}/> 
            {handleCart && 
                <MiniCart total={totalPrice && totalPrice} pokemon={pokemon} handleCloseCart={() => handleCloseCart()} dispatch={(item) => removePokemonInCart(item)}/>
            }
            <Footer />
       </>
    )
}