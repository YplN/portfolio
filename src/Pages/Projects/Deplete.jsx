import Skill from "../Generic/Skill.jsx";
import TempDiv from "../Generic/TempDiv.jsx";

const Deplete = () => {
	return (
		<>
			<div id="deplete">
				<h3 className="subtitle">Work in Progress</h3>
				<div className="text">
					<TempDiv height="200px">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi maxime
						laboriosam eligendi exercitationem, quam a nesciunt asperiores.
						Nobis, quo adipisci totam dolorem quos consequatur, excepturi
						reprehenderit neque impedit architecto nostrum.{" "}
					</TempDiv>
					<div className="skill-bar">
						<Skill name={"React.js"} fill={"#387fee"} color="white" />
						<Skill name={"HTML"} fill={"#38ee4b"} color="white" />
						<Skill name={"CSS"} fill={"#dcaf33"} color="white" />
						<Skill name={"UI"} fill={"var(--blue)"} color="white" />
						<Skill name={"UX"} fill={"var(--green)"} color="white" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Deplete;
