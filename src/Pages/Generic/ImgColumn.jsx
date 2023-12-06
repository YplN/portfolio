import { useEffect, useRef } from "react";
import useHover from "../../hook/useHover.js";

const ImgColumn = ({ src, onHover = () => {} }) => {
	const imgRef = useRef(null);
	const isHover = useHover(imgRef);

	useEffect(() => {
		if (isHover) {
			onHover();
		}
	}, [isHover]);

	return <img ref={imgRef} src={src} />;
};

export default ImgColumn;
