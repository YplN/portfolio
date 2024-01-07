import "./App.css";
import AboutMe, { TagLineSection } from "./Pages/AboutMe/AboutMe.jsx";
import Research, { ResearchSection } from "./Pages/AboutMe/Research.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Footer from "./Pages/Footer/Footer.jsx";
import Landing from "./Pages/Landing/Landing.jsx";
import NavBar from "./Pages/NavBar/NavBar.jsx";
import GracoonCaseStudy from "./Pages/Projects/Gracoon/GracoonCaseStudy.jsx";
import Projects from "./Pages/Projects/Projects.jsx";

import { useLayoutEffect } from "react";
import { Link, Outlet, Route, Routes, useLocation } from "react-router-dom";
import DepleteCaseStudy from "./Pages/Projects/Deplete/DepleteCaseStudy.jsx";
import VisualStackCaseStudy from "./Pages/Projects/VisualStack/VisualStackCaseStudy.jsx";

const Wrapper = ({ children }) => {
	const location = useLocation();
	useLayoutEffect(() => {
		document.documentElement.scrollTo(0, 0);
	}, [location.pathname]);
	return children;
};

const Layout = () => {
	return (
		<div className="app">
			<NavBar />
			<Outlet />
			<div id="graph" />
			<Contact />
			<Footer />
		</div>
	);
};

const Home = () => {
	return (
		<>
			<Landing />
			<Projects />
			<TagLineSection />
			<ResearchSection />
		</>
	);
};

function NoMatch() {
	return (
		<div id="error-page">
			<h2>Nothing to see here!</h2>
			<p>
				<Link to="/portfolio">Go to the home page</Link>
			</p>
		</div>
	);
}

export default function App() {
	return (
		<Wrapper>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/about" element={<AboutMe />} />
					<Route path="/research" element={<Research />} />
					<Route path="/projects">
						<Route path="/projects" element={<Projects />} />
						<Route
							path="/projects/gracoon"
							index
							element={<GracoonCaseStudy />}
						/>
						<Route
							path="/projects/data"
							index
							element={<VisualStackCaseStudy />}
						/>
						<Route
							path="/projects/deplete"
							index
							element={<DepleteCaseStudy />}
						/>
					</Route>
					<Route path="*" index element={<NoMatch />} />
				</Route>
			</Routes>
		</Wrapper>
	);
}
