import { useRef } from "react";
import useHover from "../../hook/useHover.js";
import ReactLogo from "../Generic/ReactLogo.jsx";
import Card from "./Cards.jsx";

import Section from "../Generic/Section.jsx";
import "./Expertise.css";

const LANGUAGES = [
	{
		id: "React",
		label: "React.js",
		logo: <ReactLogo size={"150"} stroke={"#185fde"} />,
		color: "#387fee",
	},
	{
		id: "CSS",
		label: "CSS",
		logo: <ReactLogo size={"150"} stroke={"#1f1f1f33"} />,
		color: "#dcaf33",
	},
	{
		id: "HTML",
		label: "HTML",
		logo: <ReactLogo size={"100"} stroke={"#1f1f1f"} />,
		color: "#38ee4b",
	},
	{
		id: "TypeScript",
		label: "Typescript",
		logo: <ReactLogo size={"100"} stroke={"#1f1f1f"} />,
		color: "#ba83ff",
	},
];

const Expertise = () => {
	const ref = useRef(null);
	const isHover = useHover(ref);

	return (
		<Section id="expertise">
			<h2 className="title"> Expertise</h2>
			<div className="expertise-container" ref={ref}>
				{LANGUAGES.map((e) => (
					<Card
						key={e.id}
						color={e.color}
						logo={e.logo}
						id={e.id}
						label={e.label}
					/>
				))}
				<div id="message"> HOVER TO REVEAL ! </div>
			</div>
			<div id="secret-div" className={isHover ? "show" : ""}>
				<p>
					Assigning a fixed "level of knowledge" to a coding language is, in my
					opinion, like chasing a moving target. Learning in programming is
					perpetual; there's always something new to discover. Moreover, coding
					languages evolve over time with updates and additions, making any
					static assessment outdated. The journey of mastering a language is
					dynamic, a continuous exploration rather than a fixed destination.
				</p>
				<p>
					So yeah, I guess my level could be set at, say, 70% (or maybe 1%?),
					but what does it means "knowing 70%" of a coding language?
				</p>
			</div>
		</Section>
	);
};

export default Expertise;
