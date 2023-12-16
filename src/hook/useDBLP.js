import { useCallback, useEffect, useState } from "react";

const BASE_URL_DBLP = "https://dblp.org/pid/";
const myPID = "203/9213"; // JT

const useDBLP = () => {
	const getDBLPUrl = (pid) => BASE_URL_DBLP + pid;

	const url = getDBLPUrl(myPID) + ".xml";

	function getListPublications(xml) {
		return xml.getElementsByTagName("r");
	}

	function getTitleFromPublication(pub) {
		return pub.firstChild.getElementsByTagName("title")[0].innerHTML;
	}

	// function getNamePid() {
	// 	return xml
	// 		.getElementsByTagName("dblpperson")[0]
	// 		.getElementsByTagName("person")[0]
	// 		.getElementsByTagName("author")[0].innerHTML;
	// }

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
		return (
			pub.firstChild.hasAttribute("publtype") &&
			pub.firstChild.getAttribute("publtype") === "informal"
		);
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

	function getPublicationData(pub) {
		if (isInformal(pub)) {
			return;
		}
		const year = getYearFromPublication(pub);
		const title = getTitleFromPublication(pub);
		const authorsXML = getListAuthorsFromPublication(pub);
		const authors = [];
		for (const author of authorsXML) {
			authors.push({
				name: getNameFromAuthor(author).replace(/[0-9]/g, ""),
				pid: getPidFromAuthor(author),
				url: getDBLPUrl(getPidFromAuthor(author)),
			});
		}
		const url = getPubliUrlFromPublication(pub);
		const type = getPubliTypeFromPublication(pub);
		const key = "" + getKeyFromPublication(pub);
		const phd = key.includes("phd");

		return {
			year,
			title,
			authors,
			url,
			type,
			key,
			phd,
		};
	}

	return { url, getPublicationData, getListPublications };
};

export default useDBLP;
