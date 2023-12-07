import ImgColumn from "../Generic/ImgColumn.jsx";
import TwoColumns from "../Generic/TwoColumns.jsx";
import DBLP from "./DBLP.jsx";
import Journey from "./Journey.jsx";

import Section from "../Generic/Section.jsx";
import "./AboutMe.css";

const AboutMe = () => {
	return (
		<Section id="aboutMe">
			<h2 className="title">
				<span className="fancy">About me</span>
			</h2>

			<TwoColumns
				title="Journey"
				left={<Journey />}
				right={<ImgColumn src="img/about_me/pubius.png" />}
				idLeft={"journey-text"}
				idRight={"pua-img"}
			/>
			<div id="research">
				<h3 className="subtitle">Research</h3>
				<DBLP />
			</div>
		</Section>
	);
};

export default AboutMe;
