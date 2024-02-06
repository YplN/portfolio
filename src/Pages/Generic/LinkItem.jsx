const LinkItem = ({ href, src, alt, style = {}, active = false }) => {
	let content = <img src={src} className="svg" alt={alt} />;
	if (href && active) {
		content = (
			<a href={href} target="_blank">
				{content}
			</a>
		);
	}
	return <div className="link-item-container">{content}</div>;
};

export default LinkItem;
