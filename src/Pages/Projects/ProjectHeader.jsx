import LinkItem from "../Generic/LinkItem.jsx";
import TeamMember from "../Generic/TeamMember.jsx";

const ProjectHeader = ({ title, timeline, team = [], role, stack }) => {
	return (
		<div className="project-header">
			<div className="project-title"> {title}</div>
			<div className="project-header-bar">
				<div className="header-element-container">
					<div className="header-element-title">Timeline</div>
					<div className="header-element-content">{timeline}</div>
				</div>
				<div className="header-element-container">
					<div className="header-element-title">Stack</div>
					<div className="header-element-content">
						{stack.map((s) => (
							<LinkItem
								key={s.id}
								alt={s.alt}
								src={s.src}
								style={s.style}
								href={s.href}
							/>
						))}
					</div>
				</div>
				<div className="header-element-container">
					<div className="header-element-title">Team</div>
					<div className="header-element-content">
						{team.map((member) => (
							<TeamMember
								key={member.name}
								src={member.src}
								alt={member.name}
								name={member.name}
							/>
						))}
					</div>
				</div>

				<div className="header-element-container">
					<div className="header-element-title">Role</div>
					<div className="header-element-content">{role}</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectHeader;
