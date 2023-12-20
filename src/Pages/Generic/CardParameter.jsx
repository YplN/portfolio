import { useState } from "react";

const CardParameter = ({ title, definition }) => {
	const [isExpended, setIsExpended] = useState(false);

	return (
		<div
			className="card-parameter-container"
			onClick={() => setIsExpended((p) => !p)}
		>
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
