import { useEffect, useState } from "react";

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

		const hide = a < INIT_DELAY - 30 || Math.floor(a / 30) % 2 === 1;
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
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. At illo,
				repudiandae dignissimos assumenda, amet labore asperiores, facilis aut
				adipisci deserunt iusto maiores excepturi dolor cum quia vel distinctio
				tempore perferendis?
			</p>

			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. At illo,
				repudiandae dignissimos assumenda, amet labore asperiores, facilis aut
				adipisci deserunt iusto maiores excepturi dolor cum quia vel distinctio
				tempore perferendis? Lorem ipsum, dolor sit amet consectetur adipisicing
				elit. At illo, repudiandae dignissimos assumenda, amet labore
				asperiores, facilis aut adipisci deserunt iusto maiores excepturi dolor
				cum quia vel distinctio tempore perferendis?
			</p>

			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. At illo,
				repudiandae dignissimos assumenda, amet labore asperiores, facilis aut
				adipisci deserunt iusto maiores excepturi dolor cum quia vel distinctio
				tempore perferendis?
			</p>

			<video width="640" height="240" autoPlay muted loop>
				<source src="base.mp4" type="video/mp4" />
				<source src="base.ogg" type="video/ogg" />
				Your browser does not support the video tag.
			</video>

			<img className="vintage" src={"img/gracoon/connected.png"} />
		</>
	);
};

export default Gracoon;
