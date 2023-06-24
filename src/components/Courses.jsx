import React from "react"
import CardData from "../data"
import Card from "../components/Card"


function Courses(){

    const cardElements = CardData.map((card) => {
        return (
            <Card  
                coverImg={card.coverImg}
                rating={card.rating}
                reviewCount={card.reviewCount}
                country={card.country}
                cardTitle={card.cardTitle}
                price={card.price}
            />
        )
    })

    return (
        <div className="course-section">
            <div className="courses">
                {cardElements}
            </div>
        </div>

    )
}

export default Courses