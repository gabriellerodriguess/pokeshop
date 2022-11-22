import {FaShoppingCart} from 'react-icons/fa'
import './styles.css'

export default function Header() {
    return (
        <header>
            <div className='title-menu'>
                <h1>Pokeshop</h1>
            </div>
            <nav className='nav-menu'>
                <a href="#">Pokemons</a>
                <a href="#">Items</a>
                <a href="#">Shop</a>
            </nav>
            <div className='cart-menu'>
                <span className='icon-cart'> <FaShoppingCart /> </span>
                <span className="qtd-items"> 0 </span>
            </div>
        </header>
    )
}