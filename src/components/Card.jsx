import React from 'react'

function Card(props){
    return (
        <div className='card'>
            <img src={`../src/assets/${props.coverImg}`}/>
        </div>
    )
}

export default Card