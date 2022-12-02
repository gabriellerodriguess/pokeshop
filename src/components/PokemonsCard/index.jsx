import { useEffect } from 'react'
import {FaCoins, FaShoppingCart} from 'react-icons/fa'
import './styles.css'

export default function Pokemons(props) {
    
    return (
        <section className='card-pokemon'>
            {props.pokemons && 
                props.pokemons.map((pokemon, index) => (
                    <div className={`product-pokemon color_${props.color()}`}  key={index}>
                        <div className={`image-pokemon`}>
                            <img className={pokemon.data.height <= 10 ? 'small' : 'big' || pokemon.data.height >= 20 ? 'big' : 'medium'} src={pokemon.data.sprites.front_default} alt={pokemon.data.name}></img>
                        </div>
                        <div className='info-pokemon'>
                            <h2>{pokemon.data.name}</h2>
                            <p>{pokemon.data.abilities[0].ability.name}</p>
                        </div>
                        <div className='info-price'>
                            <button className='price-pokemon'> <FaCoins /> {pokemon.data.base_experience}</button>
                            <button className='addToCart' onClick={() => props.dispatch(pokemon)}> <FaShoppingCart /> Buy</button>
                        </div>
                    </div>
            ))}
        </section>
    )
}