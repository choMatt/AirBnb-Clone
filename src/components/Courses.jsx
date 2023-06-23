import React from "react"
import CardData from "../data"
import Card from "../components/Card"


function Courses(){

    const cardElements = CardData.map((card) => {
        return (
            <Card  
                coverImg={card.coverImg}
            />
        )
    })

    return (
        <div className="courses">
            {cardElements}
        </div>
    )
}

export default Courses