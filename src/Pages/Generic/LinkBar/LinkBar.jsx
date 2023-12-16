import LinkItem from "../LinkItem.jsx";

const SOCIALS = [
	{
		href: "https://github.com/YplN",
		id: "github",
		alt: "GitHub Profile",
		src: "assets/github.svg",
	},

	{
		href: "https://www.linkedin.com/in/jocelyn-thiebaut-431297130/",
		id: "linkedin",
		alt: "LinkedIn Profile",
		src: "assets/linkedin.png",
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
				/>
			))}
		</div>
	);
};

export default LinkBar;
