import LinkBar from "../Generic/LinkBar/LinkBar.jsx";
import "./Landing.css";

const Landing = () => {
	return (
		<div className="landing">
			<div>
				<h1 className="greetings">
					<div className="roller">
						<span className="rolltext">
							<span className="en">Hi!</span>
							<br />
							<span className="fr">Salut!</span>
							<br />
							<span className="it">Ciao!</span>
							<br />
							<span className="en">Hi!</span>
							<br />
						</span>
					</div>
					<div id="jojo">I'm Jocelyn.</div>
					<div className="subtext"> I'm a web developer.</div>
				</h1>

				<LinkBar />
			</div>
			<div className="side-landing">
				<img id="logo" src="/portfolio/img/logo_lightv2.svg" />
				{/* <img id="logo" src=" */}
			</div>
		</div>
	);
};

export default Landing;
