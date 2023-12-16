import { useEffect, useState } from "react";

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
				{/* <img src="img/logo_light.svg" id="logo" /> */}
				<div className="links">
					<a className="nav-item" href="#projects">
						Work
					</a>
					<a className="nav-item" href="#aboutMe">
						About
					</a>
					<a className="nav-item" href="#research">
						Research
					</a>
					<a className="nav-item" href="#contact">
						Contact
					</a>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
