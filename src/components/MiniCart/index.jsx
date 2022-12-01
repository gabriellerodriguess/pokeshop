import { useEffect, useState } from 'react'
import { FaCoins } from 'react-icons/fa'
import { IoMdRemove, IoMdClose} from 'react-icons/io'
import './styles.css'

export function MiniCart(props) {
    return (
     <section className='box-minicart'>
        <div className='icon-close' onClick={() => props.handleCloseCart()}>
            <IoMdClose />
        </div>
        {props.pokemon &&
            props.pokemon.map((pokemonCart,index) => (
                <div className='pokemon-cart' key={index} id={index}>
                    <div className='img-cart'>
                        <img src={pokemonCart.img} alt={pokemonCart.name}></img>
                    </div>
                    <div className='text-cart'>
                        <h1>{pokemonCart.name}</h1>
                        <p>{pokemonCart.ability}</p>
                    </div>
                    <div className='price-cart'>
                        <p> <FaCoins />  {pokemonCart.price}</p>
                    </div>
                    <div className='icon-remove'>
                        <IoMdRemove />
                    </div>
                </div>   
            ))
        }
        <div className='price-total'>Total: <span>{props.total}</span></div>
     </section>
    )
}