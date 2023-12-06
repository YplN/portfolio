import { useRef } from "react";
import useHover from "../../hook/useHover.js";
import ReactLogo from "../Generic/ReactLogo.jsx";
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
	const ref = useRef(null);
	const isHover = useHover(ref);

	return (
		<section className="" id="expertise">
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
			{
				<div id="secret-div" className={isHover ? "show" : ""}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro sequi
					laboriosam cupiditate! Libero temporibus, veritatis, recusandae
					voluptatibus deleniti vel distinctio, facilis aut voluptates
					consequatur iste ad blanditiis id ex quas. Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Aspernatur eveniet aut ut delectus ipsam
					itaque eius quam eos facilis nesciunt quae obcaecati ab mollitia,
					veniam sequi recusandae sapiente sunt dolores.
				</div>
			}
		</section>
	);
};

export default Expertise;
