import { useState } from "react";

const CardParameter = ({ title, definition, disabled = false }) => {
	const [isExpended, setIsExpended] = useState(false);

	const handleClick = () => {
		if (!disabled) {
			setIsExpended((p) => !p);
		}
	};
	return (
		<div className="card-parameter-container" onClick={handleClick}>
			<div className="card-parameter-title">{title}</div>

			<div
				className={"card-parameter-definition " + (isExpended ? "show" : "")}
			>
				{definition}
			</div>
		</div>
	);
};

export default CardParameter;
