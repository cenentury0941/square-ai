import React, { useEffect } from "react";
import "./GenerateSlide3.css";
import "../GeneratePage/Generate.css";
import Bot from "../bot/verify-bot";
import { Button } from "@mui/material";

function GenerateSlide3(props){

    return (<div className="Generate-Slide3-Main-Container">
    <div className="Generate-Slide-Title">Add items to your shopping cart!
    </div>
    <div className="Generate-Slide3-Overview-Container">  
    <div className="Generate-Slide3-Horizontal-Container">
    <Bot currentCode={props.finalGen} updateCode={props.setFinalGen} initialMessages={props.initialMessages} opCode={props.opCode} />
    <div className="Generate-Slide3-Output-Container"><p>{props.finalGen}</p></div>
    </div>
    <div className="Generate-Slide3-Button-Row">
        <Button variant="contained" color="primary" onClick={()=>{props.prevSlide()}}>
        back
        </Button>
        <Button variant="contained" color="secondary" onClick={() => {props.nextSlide()}}>
        Proceed
        </Button>
    </div>
    </div>
</div>)
}

export default GenerateSlide3;