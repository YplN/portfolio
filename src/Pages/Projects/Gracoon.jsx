import { useEffect, useState } from "react";
import Skill from "../Generic/Skill.jsx";
import TempDiv from "../Generic/TempDiv.jsx";

const GraCoOnTitle = () => {
	const [advance, setAdvance] = useState({
		gra: 0,
		co: 0,
		on: 0,
	});

	const INIT_DELAY = 100;

	useEffect(() => {
		const advanceInterval = setInterval(() => {
			setAdvance((prev) => {
				if (prev.gra < INIT_DELAY) {
					return {
						gra: prev.gra + 10,
						co: prev.co + 10,
						on: prev.on + 10,
					};
				}

				if (
					prev.gra < INIT_DELAY + 100 ||
					prev.co < INIT_DELAY + 100 ||
					prev.on < INIT_DELAY + 100
				) {
					return {
						gra: prev.gra + Math.random() * 20,
						co: prev.co + Math.random() * 10,
						on: prev.on + Math.random() * 20,
					};
				} else {
					const minValue = Math.min(prev.gra, prev.co, prev.on);
					const delay = INIT_DELAY + 100 + 200;
					return {
						gra: (minValue + 10) % delay,
						co: (minValue + 10) % delay,
						on: (minValue + 10) % delay,
					};
				}
			});
		}, 300);
		return () => clearInterval(advanceInterval);
	}, []);

	const blink = (a, i) => {
		// return advance < 100 ? "_" : Math.floor(advance / 30) % 2 === 0 ? "_" : " ";
		// if (a < INIT_DELAY) {
		// 	return "";
		// }

		const hide =
			a < INIT_DELAY - 30 ||
			(a > INIT_DELAY + 100 && Math.floor(a / 30) % 2 === 1);
		return (
			<span
				className={`blink ${hide ? "hide" : ""}`}
				style={{
					borderLeft: `3px solid ${
						i == 1 ? "#e83333" : i == 2 ? "#6d6dc2" : "#41bc41"
					}`,
				}}
			></span>
		);
	};
	const subString = (s, a) => {
		return s.substring(
			0,
			Math.min(s.length, ((a - INIT_DELAY) * s.length) / 100)
		);
	};

	return (
		<div className="project-title">
			{`Gra${subString("ph ", advance.gra)}`}
			{blink(advance.gra, 1)}
			{`Co${subString("llaborative ", advance.co)}`}
			{blink(advance.co, 2)}
			{`On${subString("line!", advance.on)}`}
			{blink(advance.on, 3)}
		</div>
	);
};

const Gracoon = () => {
	return (
		<>
			<GraCoOnTitle />
			<div className="text">
				<p>
					<a href="http://gracoon.com" target="_blank">
						GraCoOn
					</a>{" "}
					(short for "<span className="short">Gra</span>ph{" "}
					<span className="short">Co</span>llaborative{" "}
					<span className="short">On</span>line") is a platform I developed with
					my friend{" "}
					<a href="https://www.lirmm.fr/~isenmann/" target="_blank">
						Lucas Isenmann
					</a>
					. During the pandemic, we were both frustrated by the limited tools
					available to graph theory researchers for remote work (despite the
					common practice of collaborating with people from afar in research).
					While platforms like Miro are great, it's disappointing that they only
					allow us to "draw" graphs without generating a "real graph." Motivated
					by this, we initiated the development of{" "}
					<a href="http://gracoon.com" target="_blank">
						GraCoOn
					</a>
					, enabling users (typically researchers or teachers/students) to
					collaboratively draw graphs.
				</p>
				<p>
					The significant advantage of storing a real graph is the ability to
					directly compute parameters for the graph, such as tracking the number
					of vertices, the diameter, etc. These computations can also extend to
					subgraphs.
				</p>
				<p>
					And all of this is done collaboratively, no need to sign-in or
					anything. You go to the website, you share the link to your friends,
					and you can start. Pretty cool, huh?
				</p>

				<TempDiv height="30px"> See full case study... </TempDiv>

				<div className="skill-bar">
					<Skill name={"HTML"} fill={"#38ee4b"} color="white" />
					<Skill name={"CSS"} fill={"#dcaf33"} color="white" />
					<Skill name={"Typescript"} fill={"#ba83ff"} color="white" />
					<Skill name={"Node.js"} fill={"#2DA"} color="white" />
					<Skill name={"UI"} fill={"var(--blue)"} color="white" />
					<Skill name={"UX"} fill={"var(--green)"} color="white" />
				</div>
				<video width="100%" autoPlay muted loop>
					<source src="base.mp4" type="video/mp4" />
					<source src="base.ogg" type="video/ogg" />
					Your browser does not support the video tag.
				</video>
			</div>

			{/* <img className="vintage" src={"img/gracoon/connected.png"} /> */}
		</>
	);
};

export default Gracoon;
