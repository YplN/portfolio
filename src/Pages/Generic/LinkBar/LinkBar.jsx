import LinkItem from "../LinkItem.jsx";

const SOCIALS = [
	{
		href: "https://github.com/YplN",
		id: "github",
		alt: "GitHub Profile",
		src: "/portfolio/assets/github.svg",
		active: true,
	},

	{
		href: "https://www.linkedin.com/in/jocelyn-thiebaut",
		id: "linkedin",
		alt: "LinkedIn Profile",
		src: "/portfolio/assets/linkedin.png",
		active: true,
	},
];

const LinkBar = () => {
	return (
		<div className="link-bar">
			{SOCIALS.map((item) => (
				<LinkItem
					key={item.id}
					href={item.href}
					alt={item.alt}
					src={item.src}
					active={item.active}
				/>
			))}
		</div>
	);
};

export default LinkBar;
