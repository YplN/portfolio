import { useEffect, useRef, useState } from "react";
import './App.css';
import ReactLogo from "./ReactLogo.jsx";
import useHover from "./hook/useHover.js";

const GREETINGS = ["Hi", "Salut", "Ciao"];


const EXPERTISES = [
  {
    id: "React",
    label : "React.js",
    logo : <ReactLogo  size={"150"} stroke={"#185fde"}/>,
    color: "#387fee"
  },
  {
    id: "CSS",
    label : "CSS",
    logo : <ReactLogo  size={"150"} stroke={"#1f1f1f33"}/>,
    color: "#dcaf33"
  },
  {
    id: "HTML",
    label : "HTML",
    logo : <ReactLogo  size={"100"} stroke={ "#1f1f1f"}/>,
    color: "#38ee4b"
  },
  {
    id: "TypeScript",
    label : "Typescript",
    logo : <ReactLogo  size={"100"} stroke={"#1f1f1f"}/>,
    color: "#ba83ff"
  },
];


const NavBar = () => {
  const navRef = useRef(null);

  return (<>
    <nav ref= { navRef }>
    <ReactLogo id="logo" size={50} stroke={"#000"}/>

      <div className="links">
      {/* <a className="nav-item">
        Home
      </a> */}
      <a className="nav-item" href="#expertise"><label>Expertise</label>
        
      </a>
      <a className="nav-item" href="#projects">
      <label>Projects</label>
        </a>
      <a className="nav-item" href="#aboutMe">
        About
      </a>
      <a className="nav-item" href="#contact">
        Contact
      </a>
      </div>
    </nav></>
  )
}

const ExpertiseBar = ({name, color}) => {
  const [value, setValue] = useState(50 + Math.random() * 30);

  useEffect(() => {
    const valueInterval = setInterval(() => {
      setValue(30 + Math.random() * 50);
    }, 1500);
    return () => clearInterval(valueInterval);
  }, []);

  return (
  <div className="expertise-bar-container" >
    <div className="bar-container">
      <div className="bar" style={{ width: value + "%", background:color}}> 
      <div className="bar-effect" > </div>
      </div>
      
    </div>
    {/* <progress id={`bar-${name}`} className="bar" value={value} max="100"> </progress> {name} */}
  </div>);
}

const Expertise = () => {
  return (
    <section className="vintage" id="expertise"> <h2 className="title" > Expertise</h2>
  <div className="expertise-container">{
    EXPERTISES.map((e) => <Card key={e.id} color={e.color} logo={e.logo} id={e.id} label={e.label}/>)
  }
  </div>

  
  <TempDiv>
          I can't note my expertise blbalabla
        </TempDiv>
  </section>);
}

const Card = ({id, label, color, logo, link}) => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef)
  return (
    <div className = "card vintage" 
      id = {id}
      style = {{backgroundColor:color}}
      ref = {hoverRef}>
      <div className = "card-top">
        <span className = "card-logo">
          {/* <i className = {logo}></i>  */}
        </span>

        <div className = "card-header">
          <span className = "card-label"> {label} </span>
        </div>
      </div>
      <div className="card-body">
        {logo}
      </div>
      <a href = {link}> 
        <div className = "card-bottom">
        <ExpertiseBar name={id} color={color}/>
          {/* <span className = "service-card-bottom-text"> Go to service </span>
          <span className = "fa-logo">
            <i class = "fa-solid fa-arrow-right" />
          </span> */}
        </div>
      </a>
    </div>
  );
}

const LandingPage = () => {

  // See https://codepen.io/marcell0lopes/pen/oNemQmB
  return(
    <div className="landing">
      <div><h1 className="greetings"> 
        <div className="roller">
          <span className="rolltext">
            <span className ="en">Hi!</span><br/>
            <span className="fr">Salut!</span><br/>
            <span className="it">Ciao!</span><br/>
            <span className="en">Hi!</span><br/>
            {/* <span className ="en">Hi!🫖</span><br/>
            <span className="fr">Salut!🥖</span><br/>
            <span className="it">Ciao!🍕</span><br/>
            <span className="en">Hi!🫖</span><br/> */}
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
        <div>I'm Jocelyn.</div><div className="subtext"> I'm web developer.</div>
      </h1>
      <TempDiv height="40px"> GitHub link, LinkedIn </TempDiv>
      </div>
      <div className="side-landing"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
	<path fill="#e44d26" d="M107.6 471l-33-370.4h362.8l-33 370.2L255.7 512"/>
	<path fill="#f16529" d="M256 480.5V131H404.3L376 447"/>
	<path fill="#ebebeb" d="M142 176.3h114v45.4h-64.2l4.2 46.5h60v45.3H154.4M156.4 336.3H202l3.2 36.3 50.8 13.6v47.4l-93.2-26"/>
	<path fill="#fff" d="M369.6 176.3H255.8v45.4h109.6M361.3 268.2H255.8v45.4h56l-5.3 59-50.7 13.6v47.2l93-25.8"/>
</svg>
      </div>
    </div>
  )
  // return(<>  
  // <div>
  //   <span style={{color:'#e4bb68'}}>console</span>.
  //   <span style={{color:"#61afef"}}>log</span>("
  //   <div className="string">
  //     <span className="greeting en">Hello !</span>
  //     <span className="greeting fr">Bonjour !</span>
  //     <span className="greeting it">Ciao !</span> 
  //   </div>
  //   <span className="closure">");</span>
  // </div>
  // </>
// );
  // const [greetingIndex, setGreetingIndex] = useState(0);

  // useEffect(() => {
  //   const greetingInterval = setInterval(() => {
  //     setGreetingIndex((prev) => (prev + 1)%GREETINGS.length);
  //   }, 800);
  //   return () => clearInterval(greetingInterval);
  // }, []);

  // return (
  //   <div>
  //     <div>{GREETINGS[greetingIndex]} !</div>
  //     <div>I'm Jocelyn.</div><div> I'm web developer.</div>
  //   </div>
  // )
}

const TempDiv = ({width = "100%", height = "300px", children}) => {
  return <div className="temp-div" style={{width, height}}>
    {children}
  </div>
}


const Projects = () =>{
  return (
    <section className="vintage" id="projects"> 
      <h2 className="title">Projects</h2>
      <div id="featured">
        <h3 className="subtitle">Featured project</h3>
        <TempDiv>

        <video width="640" height="240" autoPlay muted>
  <source src="base.mp4" type="video/mp4" />
  <source src="base.ogg" type="video/ogg"/>
Your browser does not support the video tag.
</video> 
<img className="vintage"  src={"/img/gracoon/connected.png"}/>
        </TempDiv>
      </div>
      
      <div id="wip">
        <h3 className="subtitle">Work in Progress</h3>
        <TempDiv>
          Deplete
        </TempDiv>
      </div>
      
      <div id="others">
        <h3 className="subtitle">Others</h3>
        <TempDiv />
      </div>
    </section>);
}


const AboutMe = () =>{
  const imgRef = useRef(null)
  const isHover = useHover(imgRef);
  return (
    <section className="vintage" id="aboutMe"> 
      <h2 className="title">About me</h2>

      Blabla who I am, I was not always web developer blabla, picture with Pubius Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsa, quisquam molestiae commodi dolorem quaerat, sed perspiciatis neque unde ipsam voluptates ullam totam id cupiditate officiis natus necessitatibus soluta vitae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur alias inventore magnam illo, sed, ducimus quidem optio recusandae nulla officiis, sint nostrum voluptas architecto ratione incidunt obcaecati corporis adipisci molestiae?
          <img className="vintage light" ref={imgRef} src={isHover? "/img/about_me//5_ottobre.png": "/img/about_me/pubius.png"}/>

    <div id="research">
        <h3 className="subtitle">Research</h3>
        <TempDiv>
          Some of my research (parse DBLP)
        </TempDiv>
        <TempDiv height="50px">
          My thesis
        </TempDiv>
      </div>
    </section>);
}


const Contact = () => {
  return (
    <section className="vintage" id="contact"> 
      <h2 className="title">Contact me</h2>
        <TempDiv>
       blabla let's get in touch
        </TempDiv>
        <TempDiv height="50px">
          links github, linkedin, x
        </TempDiv>
    </section>);
}


function App() {
  return (
    <>
      <NavBar/>
      <main>
        <LandingPage/>
        <Expertise/>
        <Projects/>
        <AboutMe/>
        <Contact/>
        <TempDiv>
          Footer
        </TempDiv>
      </main>
    </>
  )
}

export default App
