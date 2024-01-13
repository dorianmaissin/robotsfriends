import React from "react";
import './Card.css'

const Card = (props) =>  {
    const {color, name, email} = props
    return (
        <div className="tc bg-lightest-blue dib br2  pa3 ma2 grow bw2 shadow-5">
            <React.Fragment>
            <img src={`https://robohash.org/${name}?200x200`} alt="Robot Picrure" />
            <h2>{name}</h2>
            <p>{email}</p>
            </React.Fragment>
        </div>
    )
}

export default Card