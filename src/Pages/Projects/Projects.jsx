import BentoGrid from "../Generic/BentoGrid.jsx";
import { GracoonPresentation, GracoonVideo } from "./Gracoon.jsx";
import "./Projects.css";
const Projects = () => {
	return (
		<BentoGrid id="gracoon">
			{/* <h2 className="title">Projects</h2> */}

			<div className="project-logo">
				<img src={"img/gracoon/gracoon_gen.png"} />
				<img src={"img/gracoon/gracoon_gen.png"} />
			</div>
			{/* <GraCoOnTitle /> */}
			{/* <GracoonStack /> */}
			<GracoonPresentation />
			<GracoonVideo />
		</BentoGrid>
	);
};

export default Projects;
