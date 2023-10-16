import React from "react";
import "../common/Slide.css";
import "./Home.css";
import "../common/Button.css";
import { useNavigate } from "react-router-dom";

function HomeSlide(){

    const navigate = useNavigate();

    return (<div className="Slide Home-Slide-Container">
        <div className="Home-Horizontal-Divider">
            <div className="Home-Title-Container">
                <div className="Home-Logo"/>
                <div className="Home-Title">AiCheckoutBot</div>
            </div>
            
            <div className="Home-Sub-Title-Container">
                <div className="Home-Sub-Title">AI powered checkout assistant</div>
            </div>

        </div>
        <div className="Home-Horizontal-Divider">
            <div className="Home-Button-Container">
                <div className="Button" onClick={ () => {window.location.assign("https://github.com/cenentury0941/conjure")} }>Go To Repo</div>
                <div className="Button" onClick={ () => {navigate("/generate")}}>Create Something</div>
            </div>
        </div>
        <div className="Home-Down-Arrow"/>
    </div>)
}

function AboutSlide(){
    return (<div className="Slide Home-Slide-Container">
        <div className="Home-Horizontal-Divider">            
            <div className="Home-Content-Container">
            <div className="Home-Sub-Title-Container">
                <div className="Home-Heading">About</div>
            </div>
            <div className="Home-Content">Conjure is a generative AI powered prototyping tool aimed towards speeding up and streamlinig the usage of AI services in developing basic wireframes of various kinds required in the initial stages of a project lifecycle.</div>
            <div className="Home-Content">Conjure is envisioned to be a universal solution in developing project resources such as Database schemas, IAC scripts, UI elements and more subject to availability of Generative AI models provided by APIs such as openAI API.</div>
            </div>

        </div>
        <div className="Home-Horizontal-Divider">
            <div className="Home-Definition-Image"></div>
        </div>
    </div>)
}

function HowSlide(){
    return (<div className="Slide Home-Slide-Container">    
        <div className="Home-Horizontal-Divider">
            <div className="Home-Flow-Image"></div>
        </div>
        <div className="Home-Horizontal-Divider">
        <div className="Home-Content-Container">
            <div className="Home-Sub-Title-Container">
                <div className="Home-Heading">How it works</div>
            </div>
            <div className="Home-Content">Conjure is designed to be as simple and intuititive to use as possible. The user first select what it is that they want to develop.</div>
            <div className="Home-Content">Once the rough design is generated, the user can then prompt further changes on what has been generated to tweak it</div>
            <div className="Home-Content">Upon finalizing the content, the user will be able to proceed with exporting or deploying the generated content as they require.</div>
            </div>

        </div>
    </div>)
}

function FutureSlide(){
    return (<div className="Slide Home-Slide-Container Footpath-Background">    
        <div className="Home-Vertical-Container">
            <div className="Home-Sub-Title-Container Home-Sub-Title-No-Padding">
                <div className="Home-Heading Home-Heading-Center">Future Plans</div>
                </div>
            <div className="Home-Content">Being mainly powered by Generative AI technology, Conjure is just getting started.</div>
            <div className="Home-Content">We plan on further developing Conjure as and when newer and more optimized models are available for specific code generation.</div>
            <div className="Home-Content">We also plan on looking into other use cases for AI powered rapid prototyping tools and better means of integrating into the production cycle of projects.</div>
            </div>
    </div>)
}

function TeamSlide(){
    return (<div className="Slide Home-Slide-Container Footpath2-Background">    
        <div className="Home-Vertical-Container">
            <div className="Home-Sub-Title-Container Home-Sub-Title-No-Padding">
                <div className="Home-Heading Home-Heading-Center">Meet the Team</div>
                </div>
            <div className="Home-Content">The team behind Conjure!</div>
            </div>
    </div>)
}

export default HomeSlide;