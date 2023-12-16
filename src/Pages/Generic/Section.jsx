import { useRef } from "react";
import useOnScreen from "../../hook/useOnScreen.js";

const Section = ({ children, id }) => {
	const ref = useRef(null);
	const [, wasVisible] = useOnScreen(ref);
	return (
		<section
			ref={ref}
			id={id}
			className={"section " + (wasVisible.current ? "appear" : "")}
		>
			{children}
		</section>
	);
};

export default Section;
