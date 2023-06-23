import React from 'react'
import PhotoGrid from '../assets/Photo-Grid.png'

function Hero(){
    return (
    <div className="Hero"> 
        <img className="Hero__image" src={PhotoGrid}/> 

        <h1 className="Hero__title">
            Online Experiences
        </h1> 

        <h3 className="Hero__subtitle"> 
            Join unique interactive activities led by one-of-a-kind  
            hosts—all without leaving home. 
        </h3> 
    </div>



    )
}

export default Hero