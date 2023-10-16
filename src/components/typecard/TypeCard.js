import React from "react";
import "./TypeCard.css";

function TypeCard(props){
    return(<div className="TypeCard-Main-Container" onClick={props.clickFunction}>
        <div className="TypeCard-Title">{props.title}</div>
        <div className="TypeCard-Divider"></div>
        <div className="TypeCard-Content">{props.content}</div>
    </div>)
}

export default TypeCard;