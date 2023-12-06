const TempDiv = ({ width = "100%", height = "300px", children }) => {
	return (
		<div className="temp-div" style={{ width, height }}>
			{children}
		</div>
	);
};

export default TempDiv;
