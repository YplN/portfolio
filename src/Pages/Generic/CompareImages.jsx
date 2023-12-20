import { useRef, useState } from "react";
import useHover from "../../hook/useHover.js";

const CompareImages = ({ left, right, width, height, title, initial = 70 }) => {
	const [sliderPosition, setSliderPosition] = useState(initial);
	const containerRef = useRef(null);
	const isHover = useHover(containerRef);

	const handleMove = (event) => {
		const rect = event.currentTarget.getBoundingClientRect();
		const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));

		const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

		setSliderPosition(percent);
	};
	return (
		<div className="image-comparison">
			<div
				ref={containerRef}
				className="img-comp-container"
				onMouseMove={handleMove}
				style={{ width, height }}
			>
				<div className="img-comp-img" style={{ width, height }}>
					<img src={left.src} alt={left.alt} />
				</div>

				<div
					className="img-comp-img img-comp-overlay"
					style={{
						width,
						height,
						clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
					}}
				>
					<img src={right.src} alt={right.alt} />
				</div>
				<div
					className={"img-comp-slider "}
					style={{
						left: `calc(${sliderPosition}% - 1px)`,
					}}
				>
					<div className={"slider " + (!isHover ? "pulse" : "")} />
				</div>
			</div>
			{title && <div className="img-comp-title">{title}</div>}
		</div>
	);
};

export default CompareImages;
