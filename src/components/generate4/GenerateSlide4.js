import React from "react";
import "./GenerateSlide4.css";
import { Button } from "@mui/material";

function GenerateSlide4(props) {
    console.log("FG",props.finalGen)
    return (<div className="Generate-Slide4-Main-Container">
    <div className="Generate-Slide-Title">Here's the final code!
    <div className="Generate-Slide-Content">You can save or export the generated code now.</div>
    </div>
    <div className="Generate-Slide4-Overview-Container">  
    <div className="Generate-Slide4-Horizontal-Container">
    <div className="Generate-Slide4-Output-Container">{props.finalGen}</div>
    </div>
    <div className="Generate-Slide4-Button-Row">
        <Button variant="contained" color="primary" onClick={()=>{props.prevSlide()}}>
        Save
        </Button>
        <Button variant="contained" color="secondary" onClick={() => {props.firstSlide()}}>
        Complete
        </Button>
    </div>
    </div>
</div>)
}

export default GenerateSlide4;