import Skill from "../Generic/Skill.jsx";

const Deplete = () => {
	return (
		<>
			{/* <h3 className="subtitle">Work in Progress</h3> */}
			<span className="project-title">Deplete</span>
			<div className="text">
				<p>
					Deplete plan to become a collaborative platform for players of World
					of Warcraft enjoying doing Mythic+ Dungeons.
				</p>
				<p>
					You did not understand anything of what I just wrote? That's normal.
					Let me explain a bit more. In the video game World of Warcraft, a
					Mythic+ dungeon is a harder version of a standard dungeon. As they
					progress, enemies become tougher, dungeon mechanics get more
					challenging, and there's a timer to complete it quickly. Successful
					completion grants better loot and rewards. Players often form groups
					to tackle these challenging dungeons for more powerful gear.
				</p>

				<p>
					The problem, is that there are no platform that centralizes all the
					tips player found to finish these dungeons in time. This is what
					Deplete claims to become, with an intuitive approach where the player
					can browse the tips directly using the map of the dungeon.
				</p>
				<div className="skill-bar">
					<Skill name={"React.js"} fill={"#387fee"} color="white" />
					<Skill name={"HTML"} fill={"#38ee4b"} color="white" />
					<Skill name={"CSS"} fill={"#dcaf33"} color="white" />
					<Skill name={"UI"} fill={"var(--blue)"} color="white" />
					<Skill name={"UX"} fill={"var(--green)"} color="white" />
				</div>
			</div>
		</>
	);
};

export default Deplete;
