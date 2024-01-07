import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<nav className={scrollY < 100 ? "top" : ""}>
				{/* <img src="/portfolio/imgtfolio/img/logo_light.svg" id="logo" /> */}
				<div className="links">
					{" "}
					<Link className="nav-item" to="/">
						Home
					</Link>
					<Link className="nav-item" to="/projects">
						Work
					</Link>
					<Link className="nav-item" to="/about">
						About
					</Link>
					<Link className="nav-item" to="/research">
						Research
					</Link>
					<HashLink className="nav-item" to="/#contact">
						Contact
					</HashLink>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
