import { useRef } from "react";
import useHover from "../../hook/useHover.js";

const Bullet = ({ top, left, content }) => {
	const ref = useRef(null);
	const isHover = useHover(ref);

	return (
		<div className="bullet-container" ref={ref} style={{ top, left }}>
			<div className="bullet"></div>
			<div className={"bullet-content " + (isHover ? "show" : "")}>
				{content}{" "}
			</div>
		</div>
	);
};

const BulletImage = ({ img, bullets }) => {
	return (
		<div className="bullet-image-container">
			<img src={img.src} alt={img.alt} />
			{bullets.map((bullet) => (
				<Bullet
					key={bullet.id}
					top={bullet.top}
					left={bullet.left}
					content={bullet.content}
				/>
			))}
		</div>
	);
};

export default BulletImage;
