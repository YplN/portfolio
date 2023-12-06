import TempDiv from "../Generic/TempDiv.jsx";

import "./Landing.css";

const Landing = () => {
	// See https://codepen.io/marcell0lopes/pen/oNemQmB
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
					{/* <div className="roller">
        <span className="rolltext" id="roll2">
          <span>🫖</span><br/>
          <span>🥖</span><br/>
          <span>🍕</span><br/>
          <span>🫖</span><br/>
        </span>
      </div> */}
					<div>I'm Jocelyn.</div>
					<div className="subtext"> I'm a web developer.</div>
				</h1>
				<TempDiv height="40px"> GitHub link, LinkedIn </TempDiv>
			</div>
			<div className="side-landing">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<path
						fill="#e44d26"
						d="M107.6 471l-33-370.4h362.8l-33 370.2L255.7 512"
					/>
					<path fill="#f16529" d="M256 480.5V131H404.3L376 447" />
					<path
						fill="#ebebeb"
						d="M142 176.3h114v45.4h-64.2l4.2 46.5h60v45.3H154.4M156.4 336.3H202l3.2 36.3 50.8 13.6v47.4l-93.2-26"
					/>
					<path
						fill="#fff"
						d="M369.6 176.3H255.8v45.4h109.6M361.3 268.2H255.8v45.4h56l-5.3 59-50.7 13.6v47.2l93-25.8"
					/>
				</svg>
			</div>
		</div>
	);
};

export default Landing;
