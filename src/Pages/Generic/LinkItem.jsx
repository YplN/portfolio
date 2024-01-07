const LinkItem = ({ href, src, alt, style = {} }) => {
	let content = <img src={src} alt={alt} />;
	if (href) {
		content = (
			// <a href={href} target="_blank">
			<content />
			// </a>
		);
	}
	return (
		<div className="link-item-container">
			{/* <a href={href} target="_blank"> */}
			<img src={src} alt={alt} className="svg" style={style} />
			{/* </a> */}
		</div>
	);
};

export default LinkItem;
