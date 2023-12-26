import "./App.css";
import AboutMe from "./Pages/AboutMe/AboutMe.jsx";
import Research from "./Pages/AboutMe/Research.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Footer from "./Pages/Footer/Footer.jsx";
import Landing from "./Pages/Landing/Landing.jsx";
import NavBar from "./Pages/NavBar/NavBar.jsx";
import Projects from "./Pages/Projects/Projects.jsx";
import VisualStackCaseStudy from "./Pages/Projects/VisualStack/VisualStackCaseStudy.jsx";

const App = () => {
	return (
		<div className="app">
			<NavBar />

			<VisualStackCaseStudy />
			{/* <GracoonCaseStudy /> */}
			<Landing />
			<Projects />
			<AboutMe />
			<Research />

			<Contact />

			<Footer />
		</div>
	);
};

export default App;
