import GenericCard from "../Generic/GenericCard.jsx";
import Section from "../Generic/Section.jsx";

// import "./Projects.css";

const STACK = {
	REACT: {
		id: "react",
		src: "assets/react.svg",
		alt: "react",
	},
	NODEJS: {
		id: "nodejs",
		src: "assets/nodejs.svg",
		alt: "nodejs",
	},
	P5: {
		id: "p5",
		src: "assets/p5.svg",
		alt: "p5",
	},
	GITHUB: {
		id: "github",
		src: "assets/github.svg",
		alt: "github",
	},
};

const PROJECTS = [
	{
		id: "gracoonV2",
		src: "img/gracoon/heart.png",
		title: "Gracoon",
		subtitle: "Featured project",
		stack: [
			STACK.NODEJS,
			{ ...STACK.GITHUB, href: "https://github.com/lucas-test/gracofeu" },
		],
	},
	{
		id: "depleteV2",
		src: "img/deplete/deplete.png",
		title: "Deplete",
		subtitle: "Upcoming project",
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
		src: "img/visual_stack/linked.png",
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
		<Section id="projects">
			{PROJECTS.map((project) => (
				<GenericCard
					key={project.id}
					id={project.id}
					src={project.src}
					title={project.title}
					subtitle={project.subtitle}
					stack={project.stack}
				/>
			))}
		</Section>
	);
};

export default Projects;
