import ReactLogo from "../Generic/ReactLogo.jsx";
import TempDiv from "../Generic/TempDiv.jsx";
import Card from "./Cards.jsx";

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
	return (
		<section className="" id="expertise">
			<h2 className="title"> Expertise</h2>
			<div className="expertise-container">
				{LANGUAGES.map((e) => (
					<Card
						key={e.id}
						color={e.color}
						logo={e.logo}
						id={e.id}
						label={e.label}
					/>
				))}
			</div>
			<TempDiv>I can't note my expertise blbalabla</TempDiv>
		</section>
	);
};

export default Expertise;
