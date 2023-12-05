import { useCallback, useEffect, useState } from "react";

const useHover = (elementRef) => {
	const [isHover, setIsHover] = useState(false);

	const handleMouseEnter = useCallback(() => setIsHover(true));
	const handleMouseLeave = useCallback(() => setIsHover(false));

	useEffect(() => {
		if (elementRef.current) {
			elementRef.current.addEventListener("mouseenter", handleMouseEnter);
			elementRef.current.addEventListener("mouseleave", handleMouseLeave);

			return () => {
				if (elementRef.current) {
					elementRef.current.removeEventListener(
						"mouseenter",
						handleMouseEnter
					);
					elementRef.current.removeEventListener(
						"mouseleave",
						handleMouseLeave
					);
				}
				return;
			};
		}

		return;
	});

	return isHover;
};

export default useHover;
