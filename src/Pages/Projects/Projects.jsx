import ImgColumn from "../Generic/ImgColumn.jsx";
import TempDiv from "../Generic/TempDiv.jsx";
import TwoColumns from "../Generic/TwoColumns.jsx";
import Gracoon from "./Gracoon.jsx";

import "./Projects.css";
const Projects = () => {
	return (
		<section className="" id="projects">
			<h2 className="title">Projects</h2>
			<TwoColumns
				left={<Gracoon />}
				right={<ImgColumn src={"img/gracoon/gracoon_gen.png"} />}
			/>

			<div id="wip">
				<h3 className="subtitle">Work in Progress</h3>
				<TempDiv>Deplete</TempDiv>
			</div>

			<div id="others">
				<h3 className="subtitle">Others</h3>
				<TempDiv> Visual Stack</TempDiv>
			</div>
		</section>
	);
};

export default Projects;
