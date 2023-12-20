import { useState } from "react";

const SwitchOnClick = ({ base, reveal, title }) => {
	const [isBase, setIsBase] = useState(true);

	return (
		<div className="switch-container">
			<div className={`switch`} onClick={() => setIsBase((p) => !p)}>
				{isBase ? base : reveal}
			</div>

			{isBase && <div className="switch-title ">{title}</div>}
		</div>
	);
};

export default SwitchOnClick;
