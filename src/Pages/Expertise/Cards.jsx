import { useEffect, useRef, useState } from "react";
import useHover from "../../hook/useHover.js";

const ExpertiseBar = ({ name, color }) => {
	const [value, setValue] = useState(50 + Math.random() * 30);

	useEffect(() => {
		const valueInterval = setInterval(() => {
			setValue(30 + Math.random() * 50);
		}, 700);
		return () => clearInterval(valueInterval);
	}, []);

	return (
		<div className="expertise-bar-container">
			<div className="bar-container">
				<div className="bar" style={{ width: value + "%", background: color }}>
					<div className="bar-effect"> </div>
				</div>
			</div>
			{/* <progress id={`bar-${name}`} className="bar" value={value} max="100"> </progress> {name} */}
		</div>
	);
};

export const Card = ({ id, label, color, logo, link }) => {
	const hoverRef = useRef(null);
	const isHover = useHover(hoverRef);

	return (
		<div
			className="card vintage"
			id={id}
			style={{ backgroundColor: color }}
			ref={hoverRef}
		>
			<div className="card-top">
				<span className="card-logo">{/* <i className = {logo}></i>  */}</span>

				<div className="card-header">
					<span className="card-label"> {label} </span>
				</div>
			</div>
			{/* <div className="card-body">{logo}</div> */}
			<a href={link}>
				<div className="card-bottom">
					<ExpertiseBar name={id} color={color} />
				</div>
			</a>
		</div>
	);
};

export default Card;
