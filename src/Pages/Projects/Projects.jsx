import ImgColumn from "../Generic/ImgColumn.jsx";
import Section from "../Generic/Section.jsx";
import TempDiv from "../Generic/TempDiv.jsx";
import TwoColumns from "../Generic/TwoColumns.jsx";
import Deplete from "./Deplete.jsx";
import Gracoon from "./Gracoon.jsx";

import "./Projects.css";
const Projects = () => {
	return (
		<Section id="projects">
			<h2 className="title">Projects</h2>
			<TwoColumns
				left={<Gracoon />}
				right={<ImgColumn src={"img/gracoon/gracoon_gen.png"} />}
			/>

			<TwoColumns right={<Deplete />} left={<TempDiv>Deplete</TempDiv>} />

			<div id="others">
				<h3 className="subtitle">Others</h3>
				<TempDiv> Visual Stack</TempDiv>
			</div>
		</Section>
	);
};

export default Projects;
