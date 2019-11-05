import { useState, useEffect } from "react";

const UseConnection = () => {
	const [status, setStatus] = useState(navigator.onLine);

	const onChange = () => {
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
