import Section from "../../Generic/Section.jsx";
import ProjectHeader from "../ProjectHeader.jsx";
import { STACK } from "../Projects.jsx";

const DepleteCaseStudy = () => {
	return (
		<div className="case-study" id="deplete-case-study">
			<ProjectHeader
				team={[
					{ name: "Jocelyn Thiebaut", src: "/portfolio/img/logo_lightv2.svg" },
					{ name: "Pierre Misse", src: "/portfolio/img/people/pierre.png" },
				]}
				title="Deplete"
				timeline="2023 - present"
				role="UI/UX designer, Front End Developer, R&D"
				stack={[
					STACK.REACT,
					{ ...STACK.GITHUB },
					// STACK.HTML,
				]}
			/>

			<div className="screen-wrapper">
				<img
					className="screen"
					src="/portfolio/img/deplete/screen.jpg"
					alt="Screenshot of Deplete"
				/>
			</div>

			<Section id="deplete-case-study">
				<h2> To appear soon... </h2>
			</Section>
		</div>
	);
};

export default DepleteCaseStudy;
