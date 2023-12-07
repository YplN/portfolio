import { useEffect, useMemo, useRef, useState } from "react";

export default function useOnScreen(ref) {
	const [isIntersecting, setIntersecting] = useState(false);
	const wasIntersecting = useRef(false);

	wasIntersecting.current = isIntersecting || wasIntersecting.current;

	const observer = useMemo(
		() =>
			new IntersectionObserver(([entry]) =>
				setIntersecting(entry.isIntersecting)
			),
		[ref]
	);

	useEffect(() => {
		if (ref.current) observer.observe(ref.current);

		return () => observer.disconnect();
	}, []);

	return [isIntersecting, wasIntersecting];
}
