import Skill from "../Generic/Skill.jsx";

const VisualStack = () => {
	return (
		<>
			{/* <h3 className="subtitle">Others</h3> */}
			<span className="project-title">
				<a href="https://ypln.github.io/Visual-Stack/" target="_blank">
					Visual Stack
				</a>
			</span>
			<div className="text">
				<p>
					Here is a small project I created while I was working as a teacher.
					The goal was to make my students manipulating some data structures, in
					that case stacks and queues. I tried to make the website as simple and
					intuitive as possible.
				</p>
				<p>
					You can even see the running process of the pancake sorting. Yummy!
				</p>

				<div className="skill-bar">
					<Skill name={"P5.js"} fill={"#ed225d"} color="white" />
					<Skill name={"HTML"} fill={"#38ee4b"} color="white" />
					<Skill name={"CSS"} fill={"#dcaf33"} color="white" />
				</div>
			</div>
		</>
	);
};

export default VisualStack;
