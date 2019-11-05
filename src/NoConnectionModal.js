import React, { useState } from "react";
import PropTypes from "prop-types";
import { ModalRoot, ModalCard, Spinner } from "@vkontakte/vkui";
import T_REX_ICON from "./assets/icon";

const MODAL_INFO_ID = "modal-root-info";

const ConnectionDetectModal = ({ title, caption, actionText, onClose }) => {
	const [checkProgress, setCheckProgress] = useState(false);

	/**
	 * @returns {Mixed}
	 */
	const checkConnection = () => {
		const online = navigator.onLine;
		setCheckProgress(true);

		if (!online) {
			const timeout = setTimeout(() => {
				setCheckProgress(false);
				clearTimeout(timeout);
			}, 1000);

			return false;
		}

		return onClose();
	};

	return (
		<ModalRoot activeModal={MODAL_INFO_ID}>
			<ModalCard
				id={MODAL_INFO_ID}
				onClose={checkConnection}
				icon={<img src={T_REX_ICON} alt="Trex" style={{ width: 160 }} />}
				title={title}
				caption={caption}
				actions={[
					{
						title: checkProgress ? <Spinner size="small" /> : actionText,
						type: "primary",
						action: checkConnection,
					},
				]}
			/>
		</ModalRoot>
	);
};

ConnectionDetectModal.defaultProps = {
	title: "No internet",
	caption: "Checking the network cables, modem and router.",
	actionText: "Try again",
};

ConnectionDetectModal.propTypes = {
	title: PropTypes.string,
	caption: PropTypes.string,
	actionText: PropTypes.string,
	onClose: PropTypes.func.isRequired,
};

export default ConnectionDetectModal;
