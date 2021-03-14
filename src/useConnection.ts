import { useState, useEffect } from "react";

/**
 * @returns {boolean}
 */
const UseConnection = (): boolean => {
	const [status, setStatus] = useState<boolean>(navigator.onLine);

	/**
	 * @returns {void}
	 */
	const onChange = (): void => {
		setStatus(navigator.onLine);
	};

	useEffect(() => {
		window.addEventListener("online", onChange);
		window.addEventListener("offline", onChange);

		return () => {
			window.removeEventListener("online", onChange);
			window.removeEventListener("offline", onChange);
		};
	}, []);

	return status;
};

export default UseConnection;
