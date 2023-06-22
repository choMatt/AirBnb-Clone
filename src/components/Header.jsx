import React from 'react'
import AirBnbLogo from '../assets/AirBnb-logo.png'

export default function Header(){
    return (
        <header className="header">
            <img className="header__logo" src={AirBnbLogo}/>
        </header>
    )
}