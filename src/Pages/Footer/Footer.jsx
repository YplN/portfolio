import LinkItem from "../Landing/LinkItem.jsx";

const Footer = () => {
	return (
		<footer>
			<div className="footer">
				{/* <div class="row">
					<a href="#">GitHub</a>
					<a href="#">LinkedIn</a>
				</div> */}
				<div className="link-bar">
					<LinkItem
						href={"https://github.com/YplN"}
						src={"assets/github.svg"}
						alt={"GitHub Profile"}
					/>
					<LinkItem
						href={"https://www.linkedin.com/in/jocelyn-thiebaut-431297130/"}
						src={"assets/linkedin.png"}
						alt={"LinkedIn Profile"}
					/>
				</div>
				<div className="row">© 2023 Jocelyn Thiebaut</div>
			</div>
		</footer>
	);
};

export default Footer;
