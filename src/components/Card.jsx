import React from 'react'

function Card(props){
    return (
        <div className="card">
            <img className="card__cover-img" src={`../src/assets/${props.coverImg}`} />
            <div className="card__information">
                <img className="card__star-icon" src="../src/assets/Star-Icon.png" />
                <span className="card__rating">{props.rating}</span>
                <span className="card__review-count">({props.reviewCount})</span>
                <span className="card__country">{props.country}</span>
                <p className="card__title">{props.cardTitle}</p>
                <p className="card__price"><b>From ${props.price}</b> / person</p>
            </div>
        </div>
    )
}

export default Card