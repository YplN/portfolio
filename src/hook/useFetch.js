import { useEffect, useReducer, useRef } from "react";

const INITIAL_STATE = {
	data: undefined,
	error: null,
	loading: false,
};

const FETCH_STATUS = {
	LOADING: "loading",
	ERROR: "error",
	FETCHED: "fetched",
	NULL: "null",
};

const useFetch = (url, options) => {
	const cancelRequest = useRef(false);
	const cache = useRef({});

	const fetchReducer = (state, action) => {
		switch (action.type) {
			case FETCH_STATUS.LOADING:
				return {
					...INITIAL_STATE,
					loading: true,
				};
			case FETCH_STATUS.FETCHED:
				return {
					...INITIAL_STATE,
					data: action.payload,
				};
			case FETCH_STATUS.ERROR:
				return {
					...INITIAL_STATE,
					error: action.payload,
				};
			case FETCH_STATUS.NULL:
				return INITIAL_STATE;
			default:
				console.warn(`Unknown action ${action.state} in useFetch`);
				return state;
		}
	};

	const [state, dispatch] = useReducer(fetchReducer, INITIAL_STATE);

	useEffect(() => {
		if (!url) {
			// We do nothing if the url is empty
			console.warn(`Invalid url in useFetch`);
			dispatch({ type: FETCH_STATUS.NULL });
			return;
		}

		cancelRequest.current = false;

		const fetchData = async () => {
			dispatch({ type: FETCH_STATUS.LOADING });

			if (cache.current[url]) {
				// We already have a cache for this url
				console.log(`Loading data from cache:`, cache.current[url]);
				dispatch({ type: FETCH_STATUS.FETCHED, payload: cache.current[url] });
				return;
			}

			try {
				console.log("Fetching data from", url);
				const response = await fetch(url, options);
				if (!response.ok) {
					throw new Error(response.statusText);
				}

				const data = await response.json();
				// We store the response in the cache
				cache.current[url] = data;

				// We requested to cancel the request
				if (cancelRequest.current) return;

				dispatch({ type: FETCH_STATUS.FETCHED, payload: data });
			} catch (error) {
				if (cancelRequest.current) return;
				console.warn("Error fetching url:", url, error);
				dispatch({ type: FETCH_STATUS.ERROR, payload: error });
			}
		};

		// console.log('Fetching data');
		fetchData();

		return () => {
			cancelRequest.current = true;
		};
	}, [url]);

	return state;
};

export default useFetch;
