import React from "react";

import AboutSlide from "../home/AboutSlide";
import TeamSlide from "../home/TeamSlide";
import HomeSlide from "../home/Home";
import FutureSlide from "../home/FutureSlide";
import HowSlide from "../home/HowSlide";

function HomePage() {
	return (
		<div className="Main-Container">
			<HomeSlide></HomeSlide>
			<AboutSlide></AboutSlide>
			<HowSlide></HowSlide>
			<FutureSlide></FutureSlide>
			<TeamSlide></TeamSlide>
		</div>
	);
}

export default HomePage;
