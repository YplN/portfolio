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

	return (
		<div className="img-column-container">
			<img ref={imgRef} src={src} />
		</div>
	);
};

export default ImgColumn;
