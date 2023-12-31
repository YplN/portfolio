import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useHover from "../../hook/useHover.js";
import ImgColumn from "../Generic/ImgColumn.jsx";
import TwoColumns from "../Generic/TwoColumns.jsx";

const timelineData = [
	{
		id: "montpellier",
		imageSrc: "/portfolio/img/about_me/montpellier.jpg",
		text: (
			<>
				I didn't start as a web developer. Previously, I pursued a PhD in Graph
				Theory in Montpellier, France (see the section{" "}
				<Link to="/portfolio/research">Research</Link> for a list of my
				publications).
			</>
		),
	},
	{
		id: "orleans",
		imageSrc: "/portfolio/img/about_me/orleans.jpg",
		text: "In 2019, I relocated to Orléans, France, taking on a role as a Temporary Lecturer at the University. Amidst the COVID-19 Pandemic, teachers, including myself, had to swiftly adapt to remote teaching. This prompted me to explore solutions for providing students with the best possible learning experience using available technology. Consequently, I began developing semi-autodidactically, crafting simple webpages to assist students, such as in manipulating data structures.",
	},
	{
		id: "prague",
		imageSrc: "/portfolio/img/about_me/prague.jpg",
		text: "Subsequently, during my postdoctoral position in Prague, I collaborated with my friend Lucas Isenmann to create a website enabling graph-theory researchers and teachers to collaboratively draw graphs: GraCoOn was born.",
	},
	{
		id: "rome",
		imageSrc: "/portfolio/img/about_me/rome.jpg",
		text: "Fast forward to today, I find myself in Rome, accompanied by my wonderful dog named Pùa, and I am actively seeking a web developer position.",
	},
];

const TimeLine = () => {
	const refs = timelineData.reduce((acc, { id }) => {
		acc[id] = useRef(null);
		return acc;
	}, {});

	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const isHover = timelineData.reduce((acc, { id }) => {
		acc[id] = useHover(refs[id]);
		return acc;
	}, {});

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (!Object.values(isHover).some((hovered) => hovered)) {
				setCurrentImageIndex(
					(prevIndex) => (prevIndex + 1) % timelineData.length
				);
			}
		}, 5000);

		return () => clearInterval(intervalId);
	}, [isHover]);

	const {
		id: activeId,
		imageSrc,
		text,
	} = timelineData.find(({ id }) => isHover[id]) ||
	timelineData[currentImageIndex];

	return (
		<>
			<h2>The Journey</h2>
			<TwoColumns
				id="time-line"
				idLeft={"time-line-img"}
				left={<ImgColumn src={imageSrc} />}
				idRight={"time-line-text"}
				right={
					<div className="text">
						{timelineData.map(({ id, text }) => (
							<p key={id} ref={refs[id]}>
								{text}
							</p>
						))}
					</div>
				}
			/>
		</>
	);
};

export default TimeLine;
