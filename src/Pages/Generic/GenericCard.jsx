import LinkItem from "./LinkItem.jsx";

const GenericCard = ({ id, src, title, subtitle, stack = [] }) => {
	return (
		<div className="card-container" id={id}>
			<div className="card-title-container">
				<span className="card-subtitle">{subtitle}</span>
				<span className="card-title">{title}</span>
			</div>
			<div className="card-image-holder">
				<img src={src} />
			</div>
			<div className="card-footer-container">
				{stack.map((s) => (
					<LinkItem
						key={s.id}
						alt={s.alt}
						src={s.src}
						style={s.style}
						href={s.href}
					/>
				))}
			</div>
			{/* <div className="card-footer-container">Read more...</div> */}
		</div>
	);
};

export default GenericCard;
