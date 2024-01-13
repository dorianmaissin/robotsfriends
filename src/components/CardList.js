import React from "react"
import Card from "./Card"

const cardList = ({robots}) => {
    const cardComponent = robots.map((user, i) => {
        return <Card key={i} number={robots[i].number} name={robots[i].name} email={robots[i].email} color={robots[i].color} />
    })
    return(
        <React.Fragment>
            {cardComponent}
        </React.Fragment>
    )
}

export default cardList