const TwoColumns = ({ left, right, idLeft, idRight, id }) => {
	return (
		<div className="two-columns" id={id}>
			<div className="column left" id={idLeft}>
				{left}
			</div>
			<div className="column right" id={idRight}>
				{right}
			</div>
		</div>
	);
};

export default TwoColumns;
