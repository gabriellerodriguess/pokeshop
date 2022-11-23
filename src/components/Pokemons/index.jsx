import {FaCoins, FaShoppingCart} from 'react-icons/fa'
import './styles.css'

export default function Pokemons(props) {
    return (
        <div className='product-pokemon'>
            <div className='image-pokemon'>
                <img src={props.urlImage} alt={props.name}></img>
            </div>
            <div className='info-pokemon'>
                <h2>{props.name}</h2>
                <p>{props.abilities}</p>
            </div>
            <div className='info-price'>
                <button className='price-pokemon'> <FaCoins /> {props.price()}</button>
                <button className='addToCart'> <FaShoppingCart /> Buy</button>
            </div>
        </div>
    )
}