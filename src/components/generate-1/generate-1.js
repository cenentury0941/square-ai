import React, { useEffect, useState } from "react";
import "./generate-1.css";
import "../GeneratePage/Generate.css";
import Bot from "../bot/verify-bot";
import { Button } from "@mui/material";

function GenerateSlide01(props){

    //dummy placeholders
    const [ gen , setGen] = useState("")

    return (<div className="Generate-Slide-1-Main-Container">
    <div className="Generate-Slide-Title">Web Design Tool
    <div className="Generate-Slide-Content">Feel free to suggest modifications to the design! [Functionality yet to be added]</div>
    </div>
    <div className="Generate-Slide-1-Overview-Container">  
    <div className="Generate-Slide-1-Horizontal-Container">
    <div className="Generate-Slide-1-Output-Container">
        <iframe className="Generate-Slide-1-Fill" src="https://eduverse-online.web.app"></iframe>
        </div>
    <Bot currentCode={gen} updateCode={setGen} initialMessages={[]} opCode={4} />
    </div>
    <div className="Generate-Slide-1-Button-Row">
        <Button variant="contained" color="primary" onClick={()=>{props.nextSlide()}}>
        Back
        </Button>
        <Button variant="contained" color="secondary" onClick={() => {props.firstSlide()}}>
        Proceed
        </Button>
    </div>
    </div>
</div>)
}

export default GenerateSlide01;