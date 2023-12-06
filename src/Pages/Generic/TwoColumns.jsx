const TwoColumns = ({ left, right }) => {
	return (
		<div className="two-columns">
			<div className="column left">{left}</div>
			<div className="column right">{right}</div>
		</div>
	);
};

export default TwoColumns;
