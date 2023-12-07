const TwoColumns = ({ title = "Test Title", left, right, idLeft, idRight }) => {
	return (
		<div className="two-columns-container">
			<div className="two-columns-title">{title}</div>
			<div className="two-columns">
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
