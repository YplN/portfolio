import { Outlet } from "react-router-dom";
import GenericCard from "../Generic/GenericCard.jsx";
import Section from "../Generic/Section.jsx";

// import "./Projects.css";

export const STACK = {
	REACT: {
		id: "react",
		src: "/portfolio/assets/react.svg",
		alt: "react",
	},
	NODEJS: {
		id: "nodejs",
		src: "/portfolio/assets/nodejs.svg",
		alt: "nodejs",
	},
	P5: {
		id: "p5",
		src: "/portfolio/assets/p5.svg",
		alt: "p5",
	},
	GITHUB: {
		id: "github",
		src: "/portfolio/assets/github.svg",
		alt: "github",
	},
	HTML: {
		id: "html",
		src: "/portfolio/assets/html.svg",
		alt: "html",
	},
};

export const PROJECTS = [
	{
		id: "gracoonV2",
		projectId: "gracoon",
		src: "/portfolio/img/gracoon/heart.png",
		title: "Gracoon",
		subtitle: "Featured project",
		stack: [
			STACK.NODEJS,
			{ ...STACK.GITHUB, href: "https://github.com/lucas-test/gracofeu" },
		],
	},
	{
		id: "depleteV2",
		projectId: "deplete",
		src: "/portfolio/img/deplete/deplete.png",
		title: "Deplete",
		subtitle: "Upcoming",
		stack: [
			STACK.REACT,
			{
				...STACK.GITHUB,
				style: { cursor: "not-allowed" },
			},
		],
	},
	{
		id: "stackV2",
		projectId: "data",
		src: "/portfolio/img/visual_stack/linked.png",
		title: "DataStructures",
		subtitle: "Some more",
		stack: [
			STACK.P5,
			{ ...STACK.GITHUB, href: "https://github.com/YplN/Linked-List/" },
		],
	},
];

const Projects = () => {
	return (
		<>
			<Outlet />
			<Section id="projects">
				{PROJECTS.map((project) => (
					<GenericCard
						projectId={project.projectId}
						key={project.id}
						id={project.id}
						src={project.src}
						title={project.title}
						subtitle={project.subtitle}
						stack={project.stack}
					/>
				))}
			</Section>
		</>
	);
};

export default Projects;
