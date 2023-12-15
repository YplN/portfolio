import { useEffect, useState } from "react";
import "./App.css";
import Research from "./Pages/AboutMe/Research.jsx";
import TagLine from "./Pages/AboutMe/TagLine.jsx";
import TimeLine from "./Pages/AboutMe/TimeLine.jsx";
import GenericCard from "./Pages/Generic/GenericCard.jsx";
import ImgColumn from "./Pages/Generic/ImgColumn.jsx";
import TempDiv from "./Pages/Generic/TempDiv.jsx";
import TwoColumns from "./Pages/Generic/TwoColumns.jsx";
import Landing from "./Pages/Landing/Landing.jsx";
import NavBar from "./Pages/NavBar/NavBar.jsx";
import Deplete from "./Pages/Projects/Deplete.jsx";
import Projects from "./Pages/Projects/Projects.jsx";
import VisualStack from "./Pages/Projects/VisualStack.jsx";

// const NavBar = () => {
// 	const navRef = useRef(null);

// 	return (
// 		<>
// 			<nav ref={navRef}>
// 				{/* <ReactLogo id="logo" size={50} stroke={"#000"} /> */}
// 				<img src="img/logo_light.svg" id="logo" />
// 				<div className="links">
// 					{/* <a className="nav-item">
//       Home
//     </a> */}
// 					<a className="nav-item" href="#expertise">
// 						<label>Expertise</label>
// 					</a>
// 					<a className="nav-item" href="#projects">
// 						<label>Projects</label>
// 					</a>
// 					<a className="nav-item" href="#aboutMe">
// 						About
// 					</a>
// 					<a className="nav-item" href="#contact">
// 						Contact
// 					</a>
// 				</div>
// 			</nav>
// 		</>
// 	);
// };

// const Contact = () => {
// 	return (
// 		<Section className="vintage" id="contact">
// 			<h2 className="title">Contact me</h2>
// 			<TempDiv>blabla let's get in touch</TempDiv>
// 			<TempDiv height="50px">links github, linkedin, x</TempDiv>
// 		</Section>
// 	);
// };

// function App() {
// 	return (
// 		<>
// 			<NavBar />
// 			<main>
// 				<Landing />
// 				<Expertise />
// 				<Projects />
// 				<AboutMe />
// 				<Contact />
// 				<TempDiv>Footer</TempDiv>
// 			</main>
// 		</>
// 	);
// }

// import React, { useEffect, useState } from "react";
// import Section1 from "./components/Section1"; // Import your section components
// import Section2 from "./components/Section2";
// // ... import other sections
// App.js
// App.js
// import "./App.css"; // Create a corresponding CSS file for styling

// const mapsTo = (x, startFrom, endFrom, startTo, endTo) =>
// 	(Math.min(startTo, endTo) +
// 		(x - Math.min(startFrom, endFrom)) / Math.abs(endFrom - startFrom)) *
// 	Math.abs(endTo - startTo);

const Panel = ({ children, id, title, content, src }) => {
	return (
		<div className="panel" id={id}>
			<img className="panel-cover" src={src} />
			<h1> {title} </h1>
			<div className="panel-content">{content}</div>
			{children}
		</div>
	);
};

const panels = [
	{
		id: "gracoon-panel",
		content: (
			// <TwoColumns
			// 	title="Featuring Project"
			// 	left={<Gracoon />}
			// 	right={<img src={"img/gracoon/gracoon_gen.png"} />}
			// 	idLeft={"gracoon-text"}
			// 	idRight={"gracoon-img"}
			// />
			<Projects />
		),
		title: "Gracoon",
		src: "img/gracoon/graph.webp",
	},
	{
		id: "depleted-panel",
		content: (
			<TwoColumns
				title="Work in Progress"
				right={<Deplete />}
				idRight={"deplete-text"}
				left={<TempDiv>Deplete</TempDiv>}
				idLeft={"deplete-img"}
			/>
		),
		title: "Deplete",
		src: "img/deplete/map.png",
	},
	{
		id: "visual-stack-panel",
		content: (
			<TwoColumns
				title="Some more?"
				left={<VisualStack />}
				idRight={"visual-stack-img"}
				right={
					<video width="300px" autoPlay muted loop>
						<source src="img/visual_stack/visual_stack.mp4" type="video/mp4" />
						<source src="img/visual_stack/visual_stack.ogg" type="video/ogg" />
						Your browser does not support the video tag.
					</video>
					// <ImgColumn
					// 	src={"img/visual_stack/visual_stack_gen.png"}
					// 	idLeft={"gracoon-text"}
					// 	idRight={"gracoon-img"}
					// />
				}
				idLeft={"visual-stack-text"}
			/>
		),
		title: "Stack",
		src: "img/visual_stack/stack.png",
	},
];

const Panels = ({ panels }) => {
	return (
		<div className="panels-container">
			{panels.map((panel) => (
				<Panel
					key={panel.id}
					id={panel.id}
					title={panel.title}
					content={panel.content}
					src={panel.src}
				/>
			))}
		</div>
	);
};

const mapsTo = (x, startFrom, endFrom, startTo, endTo, clamp = true) => {
	if (startFrom > endFrom)
		return mapsTo(x - endFrom, endFrom, startFrom, startTo, endTo);

	if (startTo > endTo)
		return mapsTo(endFrom - x + startFrom, startFrom, endFrom, endTo, startTo);

	const value =
		startTo + ((endTo - startTo) * (x - startFrom)) / (endFrom - startFrom);

	if (clamp) {
		return Math.min(Math.max(startTo, value), endTo);
	}
	return value;
};

const MARGIN_BOTTOM = 200;

const SectionBis = ({ index, currentSection, scrollY, children }) => {
	const isPast = index < currentSection;
	const isPrevious = index === currentSection;
	const isActive = index == currentSection;

	const scale = mapsTo(
		scrollY,
		window.innerHeight * (index + 0.3) + MARGIN_BOTTOM * (index + 1),
		window.innerHeight * (index + 0.7) + MARGIN_BOTTOM * (index + 2),
		1,
		0.5
	);

	const blur = mapsTo(
		scrollY,
		window.innerHeight * (index + 0.5) + MARGIN_BOTTOM * (index + 1),
		window.innerHeight * (index + 1.1) + MARGIN_BOTTOM * (index + 2),
		0,
		100
	);

	const opacity = mapsTo(
		scrollY,
		window.innerHeight * (index + 0.5) + MARGIN_BOTTOM * (index + 1),
		window.innerHeight * (index + 0.2) + MARGIN_BOTTOM * (index + 2),
		1,
		0
	);

	// console.log(mapsTo(15, 10, 20, 100, 50));
	// if (index == 1 && isPrevious)
	// 	console.log(
	// 		scale,
	// 		window.innerHeight * (index + 1),
	// 		scrollY,
	// 		window.innerHeight * (index + 2)
	// 	);
	return (
		<div
			className={`section ${
				isActive ? "active" : isPrevious ? "previous" : isPast ? "past" : ""
			}`}
			style={{
				transformStyle: "preserve-3d",
				transform: `translate3d(0px, 0px, 0px) scale3d(${
					isPrevious
						? `${scale}, ${scale}, 1`
						: isPast
						? "0.5, 0.5, 1"
						: "1,1,1"
				}) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)`,
				filter: `blur(${blur}px)`,
				opacity: opacity,
			}}
		>
			{children}
		</div>
	);
};
// const Canvas = (props) => {
// 	const canvasRef = useRef(null);

// 	const draw = (ctx, frameCount) => {
// 		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
// 		ctx.fillStyle = "#000000";
// 		ctx.beginPath();
// 		ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
// 		ctx.fill();
// 	};

// 	useEffect(() => {
// 		const canvas = canvasRef.current;
// 		const context = canvas.getContext("2d");
// 		let frameCount = 0;
// 		let animationFrameId;

// 		//Our draw came here
// 		const render = () => {
// 			frameCount++;
// 			draw(context, frameCount);
// 			animationFrameId = window.requestAnimationFrame(render);
// 		};
// 		render();

// 		return () => {
// 			window.cancelAnimationFrame(animationFrameId);
// 		};
// 	}, [draw]);

// 	return <canvas ref={canvasRef} {...props} />;
// };
const App = () => {
	const [currentSection, setCurrentSection] = useState(0);
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollYValue = window.scrollY;
			// Calculate the current section based on the scroll position
			const newSection = Math.floor(
				scrollYValue / (window.innerHeight + MARGIN_BOTTOM)
			);
			setCurrentSection(newSection);
			setScrollY(scrollYValue);
		};

		// Add event listener for scroll events
		window.addEventListener("scroll", handleScroll);

		// Remove the event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []); // Empty dependency array ensures the effect runs only once

	return (
		<div className="app">
			<NavBar />

			<Landing />
			<div className="cards" id="projects">
				<GenericCard
					id="gracoonV2"
					src="img/gracoon/heart.png"
					title="Gracoon"
					subtitle="Featured project"
				/>

				<GenericCard
					id="depleteV2"
					src="img/deplete/deplete.png"
					title="Deplete"
					subtitle="Upcoming project"
				/>
				<GenericCard
					id="stackV2"
					src="img/visual_stack/linked.png"
					title="DataStructure"
					subtitle="Some more"
				/>
			</div>
			<TwoColumns
				left={<TagLine />}
				right={<ImgColumn src="img/about_me/pubius.png" />}
				idLeft={"journey-text"}
				idRight={"pua-img"}
				id={"aboutMe"}
			/>

			<h2>The Journey</h2>
			<TimeLine />
			<Research />

			{/* <Contact /> */}

			{/* <SectionBis index={0} currentSection={currentSection} scrollY={scrollY}>
				<Panels panels={panels} />
			</SectionBis>
			<SectionBis index={1} currentSection={currentSection} scrollY={scrollY}>
				<Expertise />
			</SectionBis>
			<SectionBis index={2} currentSection={currentSection} scrollY={scrollY}>
				<AboutMe />
			</SectionBis>
			<SectionBis index={3} currentSection={currentSection} scrollY={scrollY}>

				<Landing />
			</SectionBis>
			<SectionBis index={4} currentSection={currentSection} scrollY={scrollY}>
				<Contact />
			</SectionBis>
			<SectionBis index={5} currentSection={currentSection} scrollY={scrollY}>
				<TempDiv>Footer</TempDiv>
			</SectionBis> */}
		</div>
	);
};

export default App;
