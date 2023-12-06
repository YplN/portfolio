import ImgColumn from "../Generic/ImgColumn.jsx";
import TwoColumns from "../Generic/TwoColumns.jsx";
import DBLP from "./DBLP.jsx";
import Journey from "./Journey.jsx";

import "./AboutMe.css";

const AboutMe = () => {
	return (
		<section className="" id="aboutMe">
			<h2 className="title">
				<span className="fancy">About me</span>
			</h2>

			<TwoColumns
				left={<Journey />}
				right={<ImgColumn src="img/about_me/pubius.png" />}
			/>
			<div id="research">
				<h3 className="subtitle">Research</h3>
				<DBLP />
			</div>
		</section>
	);
};

export default AboutMe;
