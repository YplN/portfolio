import ImgColumn from "../Generic/ImgColumn.jsx";
import Section from "../Generic/Section.jsx";
import TempDiv from "../Generic/TempDiv.jsx";
import TwoColumns from "../Generic/TwoColumns.jsx";
import Deplete from "./Deplete.jsx";
import Gracoon from "./Gracoon.jsx";

import "./Projects.css";
import VisualStack from "./VisualStack.jsx";
const Projects = () => {
	return (
		<Section id="projects">
			<h2 className="title">Projects</h2>
			<TwoColumns
				title="Featuring Project"
				left={<Gracoon />}
				right={
					<ImgColumn
						src={"img/gracoon/gracoon_gen.png"}
						idLeft={"gracoon-text"}
						idRight={"gracoon-img"}
					/>
				}
			/>

			<TwoColumns
				title="Work in Progress"
				right={<Deplete />}
				idRight={"deplete-text"}
				left={<TempDiv>Deplete</TempDiv>}
				idLeft={"deplete-img"}
			/>

			<TwoColumns
				title="Some more?"
				left={<VisualStack />}
				idRight={"visual-stack-img"}
				right={
					<video width="300px" autoPlay muted loop>
						<source src="img/visual_stack/visual_stack.mp4" type="video/mp4" />
						<source src="img/visual_stack/visual_stack.ogg" type="video/ogg" />
						Your browser does not support the video tag.
					</video>
					// <ImgColumn
					// 	src={"img/visual_stack/visual_stack_gen.png"}
					// 	idLeft={"gracoon-text"}
					// 	idRight={"gracoon-img"}
					// />
				}
				idLeft={"visual-stack-text"}
			/>
		</Section>
	);
};

export default Projects;
