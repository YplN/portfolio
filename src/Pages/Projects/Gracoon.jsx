import { useEffect, useState } from "react";
import Skill from "../Generic/Skill.jsx";

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
			<div id="gracoon">
				<GraCoOnTitle />
				<div className="text">
					<p>
						<a href="http://gracoon.com" target="_blank">
							GraCoOn
						</a>{" "}
						(for "<strong>Gra</strong>ph <strong>Co</strong>llaborative{" "}
						<strong>On</strong>line") is a platform I developed with my friend{" "}
						<a href="https://www.lirmm.fr/~isenmann/" target="_blank">
							Lucas Isenmann
						</a>
						. During the pandemic, we both were very annoyed by the few amount
						of tools we had as graph theory researchers to work remotely
						(despite the fact that in research, it is very common to work with
						people from afar!). The website Miro is amazing, but it is very
						frustrating that we can only "draw" graphs, in the sense where all
						we have is a drawing, not a "real graph". With this idea in mind, we
						started to developed{" "}
						<a href="http://gracoon.com" target="_blank">
							GraCoOn
						</a>
						, where the users (typically researchers or teachers/students) can
						draw collaboratively graphs.
					</p>
					<p>
						The biggest benefit of storing a real graph, is that we can decide
						to directly compute parameters for your graph (say for example to
						track the number of vertices, the diameter, etc...). We can also
						compute and track these parameters on a subgraph.
					</p>
					<p>And all of this, collaboratively. Pretty cool, uh?</p>
					<div className="skill-bar">
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
					<div> See full case study... </div>
				</div>

				{/* <img className="vintage" src={"img/gracoon/connected.png"} /> */}
			</div>
		</>
	);
};

export default Gracoon;
