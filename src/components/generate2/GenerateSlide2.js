import React, { useState } from "react";
import "./GenerateSlide2.css";
import "../GeneratePage/Generate.css";
import { Button, CircularProgress, TextField, useScrollTrigger } from "@mui/material";
import { Scale } from "@mui/icons-material";

function GenerateSlide2(props){

    const [ overview , setOverview ] = useState("");
    const [ loading , setLoading ] = useState(false);

    const intialGen = async () => {
        setLoading(true);
        // generateInitialCode(props.opCode, overview).then( (result) => {
        //     props.nextSlide();
        //     setLoading(false);
        //     if(props.opCode === 2)
        //     {
        //         props.setInitialGen(result);
        //     }
        //     else
        //     {    
        //     var splitResult = result.split("```");
        //     props.setInitialGen(splitResult[1]);
        //     props.setInitialMessages( [splitResult[0], splitResult[2]] );
        //     }
        // }
        // );
    }

    return(<div className="Generate-Slide2-Main-Container">
        <div className="Generate-Slide-Title">Give us an overview
        <div className="Generate-Slide-Content">Explain your project requirements so we can generate a base script we can begin working with!</div>
        </div>
        <div className="Generate-Slide2-Overview-Container">  
        <TextField
          id="standard-multiline-static"
          multiline
          rows={18}
          placeholder="Provide an overview of your requirements..."
          variant="standard"
          fullWidth
          value={overview}
          onChange={(event)=>{setOverview(event.target.value)}}
        />
        <div className="Generate-Slide2-Button-Row">
        <Button variant="contained" color="primary" onClick={()=>{setOverview("");props.prevSlide()}}>
        back
        </Button>
        <Button variant="contained" color="secondary" onClick={intialGen}>
        Proceed
        </Button>
        </div>
        { loading &&
        <div className="Generate-Slide2-Loader-Container" >
            <CircularProgress color="warning" sx={{scale:"1.5"}}/>
        </div>
        }
        </div>
    </div>)
}

export default GenerateSlide2;