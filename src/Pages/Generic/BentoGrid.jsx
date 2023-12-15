import { useRef } from "react";
import useOnScreen from "../../hook/useOnScreen.js";

const BentoGrid = ({ children, id }) => {
	const ref = useRef(null);
	const [, wasVisible] = useOnScreen(ref);
	return (
		<div
			ref={ref}
			id={id}
			className={"bento " + (wasVisible.current ? "appear" : "")}
		>
			{children}
		</div>
	);
};

export default BentoGrid;
