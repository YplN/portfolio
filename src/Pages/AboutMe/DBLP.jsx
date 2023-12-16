import { useEffect, useState } from "react";
import useDBLP from "../../hook/useDBLP.js";

const DBLP = () => {
	const { url, getPublicationData, getListPublications } = useDBLP();
	const [publications, setPublications] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((response) => response.text())
			.then((data) => {
				const parser = new DOMParser();
				const xml = parser.parseFromString(data, "application/xml");
				const publicationsXML = getListPublications(xml);

				const publicationsJSX = [];
				for (const pub of publicationsXML) {
					const data = getPublicationData(pub);
					if (data)
						publicationsJSX.push(
							<Publication
								year={data.year}
								title={data.title}
								authors={data.authors}
								url={data.url}
								type={data.type}
								key={data.key}
								phd={data.phd}
							/>
						);
				}
				setPublications(publicationsJSX);
			})
			.catch(console.error);
	}, []);
	return <div id="publications">{publications}</div>;
};

const Publication = ({ type, authors, year, url, title, phd }) => {
	return (
		<div className={"publication vintage " + (phd ? "phd" : "")}>
			{/* <div className={type}> </div> */}
			<span className="year">{year}</span>
			<div className="article-header">
				<a href={url} className="article">
					{title}
				</a>
			</div>
			<div className="authors-list">
				{authors.map((a) => (
					<a key={a.pid} className="author" href={a.url}>
						{a.name}
					</a>
				))}
			</div>
		</div>
	);
};

export default DBLP;
