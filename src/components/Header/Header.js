import "./Header.css"
import rosneft_logo from '../../icons/rosneft-logo.svg'
import React from "react"
import hexagon_gradient_2_1 from '../../icons/hexagon-gradient-2.1.png'
import hexagon_gradient_4 from '../../icons/hexagon-gradient-4.png'

const menuItems = ['Главная', 'Организаторы', 'Правила', '#ПульсМарафон', 'rn.digital']

function Header() {
    return (
        <React.Fragment>
            <header className='Header'>
                <img src={rosneft_logo} className='logo' alt='rosneft-logo'/>
                <nav>
                    <ul>
                        {menuItems.map((item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        })}
                    </ul>
                </nav>
                <img src={hexagon_gradient_2_1} className='hexagon_gradient_2_1' alt='hexagon_gradient_2_1'/>
                <img src={hexagon_gradient_4} className='hexagon_gradient_4' alt='hexagon_gradient_4'/>
            </header>
        </React.Fragment>
    )
}

export default Header  