const Skill = ({ name, fill, color }) => {
	return (
		<div className="skill" style={{ backgroundColor: fill, color: color }}>
			{name}
		</div>
	);
};

export default Skill;
