import React from 'react'
import PhotoGrid from '../assets/Photo-Grid.png'

function Hero(){
    return (
    <div class="Hero"> 
        <img class="Hero__image" src={PhotoGrid}/> 

        <h1 class="Hero__title">
            Online Experiences
        </h1> 

        <h3 class="Hero__subtitle"> 
            Join unique interactive activities led by one-of-a-kind  
            hosts—all without leaving home. 
        </h3> 
    </div>



    )
}

export default Hero