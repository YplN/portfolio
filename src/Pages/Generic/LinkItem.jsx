const LinkItem = ({ href, src, alt }) => {
	return (
		<div className="link-item-container">
			<a href={href} target="_blank">
				<img src={src} alt={alt} />
			</a>
		</div>
	);
};

export default LinkItem;
