import { useRef } from "react";
import useHover from "../../hook/useHover.js";
import ImgColumn from "../Generic/ImgColumn.jsx";
import TwoColumns from "../Generic/TwoColumns.jsx";

const TimeLine = ({}) => {
	const refMontpellier = useRef(null);
	const refOrleans = useRef(null);
	const refPrague = useRef(null);
	const refRome = useRef(null);

	const isHoverMontpellier = useHover(refMontpellier);
	const isHoverOrleans = useHover(refOrleans);
	const isHoverPrague = useHover(refPrague);
	const isHoverRome = useHover(refRome);

	// useEffect(() => {
	// 	console.log(
	// 		"Montpellier: ",
	// 		isHoverMontpellier,
	// 		" Orleans: ",
	// 		isHoverOrleans,
	// 		" Prague",
	// 		isHoverPrague,
	// 		" Rome",
	// 		isHoverRome
	// 	);
	// }, [isHoverMontpellier, isHoverOrleans, isHoverPrague, isHoverRome]);

	let imgSrc = "img/about_me/5_ottobre.png";
	imgSrc = "img/about_me/montpellier.jpg";
	if (isHoverMontpellier) {
		imgSrc = "img/about_me/montpellier.jpg";
	}
	if (isHoverOrleans) {
		imgSrc = "img/about_me/orleans.jpg";
	}
	if (isHoverPrague) {
		imgSrc = "img/about_me/prague.jpg";
	}
	if (isHoverRome) {
		imgSrc = "img/about_me/rome.jpg";
	}
	// if(is)

	return (
		<TwoColumns
			id="time-line"
			idLeft={"time-line-img"}
			left={<ImgColumn src={imgSrc} />}
			idRight={"time-line-text"}
			right={
				<div className="text">
					<p ref={refMontpellier}>
						I didn't start as a web developer. Previously, I pursued a{" "}
						<strong>PhD in Graph Theory</strong> in Montpellier, France (see
						below for a list of my publications).
					</p>

					<p ref={refOrleans}>
						In 2019, I relocated to Orléans, France, taking on a role as a{" "}
						<strong>Temporary Lecturer</strong> at the University. Amidst the
						COVID-19 Pandemic, teachers, including myself, had to swiftly adapt
						to remote teaching. This prompted me to explore solutions for
						providing students with the best possible learning experience using
						available technology. Consequently, I began developing
						semi-autodidactically, crafting <strong>simple webpages</strong> to
						assist students, such as in manipulating data structures.
					</p>

					<p ref={refPrague}>
						Subsequently, during my postdoctoral position in Prague, I
						collaborated with my friend Lucas Isenmann to create a website
						enabling graph-theory researchers and teachers to collaboratively
						draw graphs: <strong>GraCoOn was born.</strong>
					</p>

					<p ref={refRome}>
						Fast forward to today, I find myself in Rome, accompanied by my
						wonderful dog named Pùa, and{" "}
						<strong>I am actively seeking a web developer position.</strong>
					</p>
				</div>
			}
		/>
	);
};

export default TimeLine;
