import React from 'react'
import AirBnbLogo from '../assets/AirBnb-logo.png'

function Header(){
    return (
        <header className="header">
            <img className="header__logo" src={AirBnbLogo}/>
        </header>
    )
}

export default Header