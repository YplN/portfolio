import { useRef } from "react";
import useHover from "../../hook/useHover.js";

const TeamMember = ({ src, alt, name }) => {
	const hoverRef = useRef(null);
	const isHover = useHover(hoverRef);
	return (
		<div ref={hoverRef} className="team-member-container">
			<div className="team-img-wrapper">
				<img src={src} alt={alt} />
			</div>
			{isHover && (
				<div className="tooltip">
					<span>{name}</span>
				</div>
			)}
		</div>
	);
};

export default TeamMember;
