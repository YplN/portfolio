import { useEffect, useRef } from "react";

const BentoCard = ({ children, id }) => {
	const refCard = useRef(null);

	const handleMouseMove = (e) => {
		// console.log("MouseMove", e);
		const rect = refCard.current.getBoundingClientRect(),
			x = e.clientX - rect.left,
			y = e.clientY - rect.top;

		refCard.current.style.setProperty("--mouse-x", `${x}px`);
		refCard.current.style.setProperty("--mouse-y", `${y}px`);
	};
	useEffect(() => {
		if (refCard.current) {
			refCard.current.addEventListener("mousemove", handleMouseMove);
		}

		return () => {
			if (refCard.current) {
				refCard.current.removeEventListener("mousemove", handleMouseMove);
			}
		};
	}, [refCard.current]);

	return (
		<div id={id} ref={refCard} className="bento-card">
			<div className="bento-card-container">{children}</div>
		</div>
	);
};

export default BentoCard;
