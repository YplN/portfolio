import ImgColumn from "../Generic/ImgColumn.jsx";
import TwoColumns from "../Generic/TwoColumns.jsx";

import Section from "../Generic/Section.jsx";
// import "./AboutMe.css";
import TagLine from "./TagLine.jsx";
import TimeLine from "./TimeLine.jsx";

export const TagLineSection = () => {
	return (
		<TwoColumns
			left={<TagLine />}
			right={<ImgColumn src="/portfolio/img/about_me/pubius.png" />}
			idLeft={"journey-text"}
			idRight={"pua-img"}
			id={"aboutMeColumn"}
		/>
	);
};
const AboutMe = () => {
	return (
		<Section id="aboutMe">
			<TagLineSection />
			<TimeLine />
		</Section>
	);
};

export default AboutMe;
