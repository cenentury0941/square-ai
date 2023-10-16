import React from "react";
import "./generate0.css";
import "../common/Slide.css";
import "../home/Home.css";
import "../common/Button.css";

function GenerateSlide0(props){
    return (<div className="Slide Home-Slide-Container">    
    <div className="Home-Vertical-Container">
        <div className="Home-Sub-Title-Container Home-Sub-Title-No-Padding">
            <div className="Home-Heading Home-Heading-Center">Web Design</div>
            </div>
        <div className="Home-Content-Center">The Web Design tool is currently under development. It was envisioned as a means of leveraging code and image generation AI models to assist in rapid mock-up testing of web pages.</div>
        <div className="Home-Content-Center">Due to time limitations, we've just developed a mock-up UI for the tool where in a web page is displayed on the left with a chat window on the right which would in theory allow the user to interface with the AI models and prompt them to make appropriate changes.</div>
        <div className="Generate-Slide0-web-design-image"></div>
        <div className="Home-Button-Container Home-No-Margin">
        <div className="Button" onClick={ () => { props.nextSlide() } }>Back</div>
        <div className="Button" onClick={ () => { props.prevSlide() } }>Proceed</div>
        </div>
        
        </div>
        
</div>)
}

export default GenerateSlide0;