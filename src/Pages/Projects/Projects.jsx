import GenericCard from "../Generic/GenericCard.jsx";
import Section from "../Generic/Section.jsx";

// import "./Projects.css";
const Projects = () => {
	return (
		<Section id="projects">
			<GenericCard
				id="gracoonV2"
				src="img/gracoon/heart.png"
				title="Gracoon"
				subtitle="Featured project"
			/>

			<GenericCard
				id="depleteV2"
				src="img/deplete/deplete.png"
				title="Deplete"
				subtitle="Upcoming project"
			/>
			<GenericCard
				id="stackV2"
				src="img/visual_stack/linked.png"
				title="DataStructure"
				subtitle="Some more"
			/>
		</Section>
	);
};

export default Projects;
