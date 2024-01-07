import { useState } from "react";

const Expendable = ({ expended, collapsed }) => {
	const [isExpended, setIsExpended] = useState(false);

	const handleClickOnContainer = () => {
		if (isExpended) return;
		setIsExpended(true);
	};
	return (
		<div
			className={`expendable ${isExpended ? "expended" : ""}`}
			onClick={handleClickOnContainer}
		>
			{isExpended ? (
				<div className="expended-content-container">
					<div className="close" onClick={() => setIsExpended(false)}>
						<svg
							width="13"
							height="15"
							viewBox="0 0 13 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="close-svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M1.73716 0.324281C1.36397 -0.0828384 0.731405 -0.110341 0.324286 0.262851C-0.0828328 0.636044 -0.110336 1.26861 0.262857 1.67573L5.3632 7.23974L0.262845 12.8038C-0.110348 13.2109 -0.0828447 13.8434 0.324274 14.2166C0.731393 14.5898 1.36396 14.5623 1.73715 14.1552L6.5 8.95938L11.2628 14.1552C11.636 14.5623 12.2686 14.5898 12.6757 14.2166C13.0828 13.8434 13.1103 13.2109 12.7372 12.8038L7.63681 7.23975L12.7372 1.67573C13.1104 1.26861 13.0829 0.636044 12.6757 0.262851C12.2686 -0.110341 11.636 -0.0828384 11.2629 0.324281L6.50001 5.52011L1.73716 0.324281Z"
							></path>
						</svg>
					</div>
					{expended}
				</div>
			) : (
				<div className="expended-content-container">
					<div className="question-mark" onClick={() => setIsExpended(false)}>
						<img src="/portfolio/assets/question_mark.svg" alt="?" />
					</div>
					{collapsed}
				</div>
			)}
		</div>
	);
};

export default Expendable;
