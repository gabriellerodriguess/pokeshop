import { useEffect, useState } from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import './styles.css'

export default function Header(props) { 
    const [isMobile, setIsMobile] = useState(false)
    const [menuVisible, setMenuVisible] = useState(false)

    useEffect(() => {
        menuMobile()
    }, [])
    
    function menuMobile() {
        if(window.innerWidth <= 768) {
            setIsMobile(!isMobile)
        }
    }
    
    function handleClick() {
        setMenuVisible(!menuVisible)
    }

    return (
        <header>
            {isMobile && 
                <div className='menu-mobile' onClick={() => handleClick()}> 
                    <GiHamburgerMenu />
                    <nav className={`nav-mobile ${menuVisible ? 'enabled' : 'disabled'}`}>
                        <a href="#">Pokemons</a>
                        <a href="#">Items</a>
                        <a href="#">Shop</a>
                    </nav>
                </div>
            }
            <div className='title-menu'>
                <h1>Pokeshop</h1>
            </div>
            {!isMobile &&
                <nav className='menu-desk'>
                    <a href="#">Pokemons</a>
                    <a href="#">Items</a>
                    <a href="#">Shop</a>
                </nav>
            }
            <div className='cart-menu' onClick={() => props.dispatch()}>
                <span className='icon-cart'> <FaShoppingCart /> </span>
                <span className="qtd-items"> {props.itemsCart.length} </span>
            </div>
        </header>
    )
}