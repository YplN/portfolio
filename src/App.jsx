import { useRef } from "react";
import "./App.css";
import AboutMe from "./Pages/AboutMe/AboutMe.jsx";
import Expertise from "./Pages/Expertise/Expertise.jsx";
import Section from "./Pages/Generic/Section.jsx";
import TempDiv from "./Pages/Generic/TempDiv.jsx";
import Landing from "./Pages/Landing/Landing.jsx";
import Projects from "./Pages/Projects/Projects.jsx";

const NavBar = () => {
	const navRef = useRef(null);

	return (
		<>
			<nav ref={navRef}>
				{/* <ReactLogo id="logo" size={50} stroke={"#000"} /> */}
				<img src="img/logo_light.svg" id="logo" />
				<div className="links">
					{/* <a className="nav-item">
      Home
    </a> */}
					<a className="nav-item" href="#expertise">
						<label>Expertise</label>
					</a>
					<a className="nav-item" href="#projects">
						<label>Projects</label>
					</a>
					<a className="nav-item" href="#aboutMe">
						About
					</a>
					<a className="nav-item" href="#contact">
						Contact
					</a>
				</div>
			</nav>
		</>
	);
};

const Contact = () => {
	return (
		<Section className="vintage" id="contact">
			<h2 className="title">Contact me</h2>
			<TempDiv>blabla let's get in touch</TempDiv>
			<TempDiv height="50px">links github, linkedin, x</TempDiv>
		</Section>
	);
};

function App() {
	return (
		<>
			<NavBar />
			<main>
				<Landing />
				<Expertise />
				<Projects />
				<AboutMe />
				<Contact />
				<TempDiv>Footer</TempDiv>
			</main>
		</>
	);
}

export default App;
