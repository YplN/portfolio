const TwoColumns = ({
	title = "Test Title",
	left,
	right,
	idLeft,
	idRight,
	id,
}) => {
	return (
		<div className="two-columns-container">
			{/* <div className="two-columns-title">{title}</div> */}
			<div className="two-columns" id={id}>
				<div className="column left" id={idLeft}>
					{left}
				</div>
				<div className="column right" id={idRight}>
					{right}
				</div>
			</div>
		</div>
	);
};

export default TwoColumns;
