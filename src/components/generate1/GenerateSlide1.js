import React from "react";
import "./GenerateSlide1.css";
import "../GeneratePage/Generate.css";
import TypeCard from "../typecard/TypeCard";

function GenerateSlide1(props){
    return(<div className="Generate-Slide1-Main-Container">
        <div className="Generate-Slide-Title">What would you like to create today?
        <div className="Generate-Slide-Content">Select one of the types of resource you'd like to begin working on from the options below!</div>
        </div>
        <div className="Generate-Slide1-TypeCard-Container">
            <TypeCard title="Database Schema" content="Generate a database schema for a defined application functionality" clickFunction={() => {props.setOpCode(0);props.nextSlide()}} />
            <TypeCard title="IAC Script" content="Generate IAC scripts for infrastructure automation" clickFunction={() => {props.setOpCode(1);props.nextSlide()}} />
            <TypeCard title="Architecture design" content="Generate architecture suggestion for cloud deployment of a project" clickFunction={() => {props.setOpCode(2);props.nextSlide()}} />
            <TypeCard title="Web Design" content="Demo functionality of designing web pages using generative AI [concept]" clickFunction={props.prevSlide} />
        </div>
    </div>)
}

export default GenerateSlide1;