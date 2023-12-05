import { useEffect, useState } from "react";

const BASE_URL_DBLP = "https://dblp.org/pid/";

const myPID = "203/9213"; // JT

function getDBLPUrl(pid) {
	return BASE_URL_DBLP + pid;
}

function getListPublications(xml) {
	return xml.getElementsByTagName("r");
}

function getTitleFromPublication(pub) {
	return pub.firstChild.getElementsByTagName("title")[0].innerHTML;
}

function getNamePid(xml) {
	return xml
		.getElementsByTagName("dblpperson")[0]
		.getElementsByTagName("person")[0]
		.getElementsByTagName("author")[0].innerHTML;
}

function getListAuthorsFromPublication(pub) {
	return pub.firstChild.getElementsByTagName("author");
}

function getPidFromAuthor(author) {
	return author.getAttribute("pid");
}

function getNameFromAuthor(author) {
	return author.innerHTML;
}

function getYearFromPublication(pub) {
	if (pub.firstChild.getElementsByTagName("year").length != 0)
		return pub.firstChild.getElementsByTagName("year")[0].innerHTML;
	return;
}


function isInformal(pub) {
	return pub.firstChild.hasAttribute("publtype") && pub.firstChild.getAttribute("publtype") === "informal";
}

function getPubliTypeFromPublication(pub) {
	return pub.firstChild.nodeName;
}

function getPubliUrlFromPublication(pub) {
	if (pub.firstChild.getElementsByTagName("ee").length != 0)
		return pub.firstChild.getElementsByTagName("ee")[0].innerHTML;
	return;
}

function getKeyFromPublication(pub) {
	return pub.firstChild.getAttribute("key");
}

function getPublicationDBLPUrlFromKey(key) {
	return "https://dblp.org/rec/" + key + ".html";
}

function isArxiv(keyPub) {
	return keyPub.substr(0, 4) === "abs-";
}

function formatLabel(keyPub) {
	if (!isArxiv(keyPub)) {
		return keyPub.replace(/[a-z]/g, "");
	} else {
		// return "ArX-" + keyPub.slice(4);
		return "CoRR";
	}
}

const DBLP = () => {
	const url = BASE_URL_DBLP + myPID + ".xml";

	// const dataDBLP = useFetch(url);
	const [publications, setPublications] = useState([]);

	// console.log(dataDBLP);
	useEffect(() => {
		fetch(url)
		.then((response) => response.text())
		.then((data) => {
			const parser = new DOMParser();
			const xml = parser.parseFromString(data, "application/xml");
			// console.log(xml);

			const publicationsXML = getListPublications(xml);

			const publicationsJSX = [];
			for(const pub of publicationsXML) {
				const year = getYearFromPublication(pub);
				const title = getTitleFromPublication(pub);
				const authorsXML = getListAuthorsFromPublication(pub);
				const authors = [];
				for(const author of authorsXML){
					authors.push({
						name : getNameFromAuthor(author).replace(/[0-9]/g, ''),
						pid: getPidFromAuthor(author),
						url: getDBLPUrl(getPidFromAuthor(author))
					})
				}
				const url = getPubliUrlFromPublication(pub);
				const type = getPubliTypeFromPublication(pub);
				const key = ""+ getKeyFromPublication(pub);


				

				if(!isInformal(pub)){
					// console.log(pub, key, key.includes("phd"))
				publicationsJSX.push(<Publication year={year} title={title} authors={authors} url={url} type={type} key={key} phd={key.includes("phd")}/>);
				}

			}

			setPublications(publicationsJSX)
		})
		.catch(console.error);
	}, []);
		return (<div className="publications">{publications}</div>)
	//(
		// {publications}
		// <Publication
		// 	type={"arx"}
		// 	authors={["a1", "a2", "a3"]}
		// 	year="2018"
		// 	url="https://www.google.com"
		// 	title="Great research article"
		// />
	// );
};

const Publication = ({ type, authors, year, url, title, phd }) => {
	return (
		<div className={"publication vintage " + (phd? "phd" : "")}>
			{/* <div className={type}> </div> */}
				<span className="year">{year}</span> 
			<div className="article-header">
				<a href={url} className="article"> {title} </a>
			</div>
			<div className="authors-list">
				{authors.map((a) => 
					<a key={a.pid} className="author" href={a.url}>
						{a.name}
					</a>
				)}
			</div>
		</div>
	);
};

export default DBLP;
