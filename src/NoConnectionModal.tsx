import React, { useState } from "react";
import { ModalRoot, ModalCard, Spinner, Button } from "@vkontakte/vkui";
import T_REX_ICON from "./assets/icon";

export interface ConnectionDetectModalProps {
	header?: string;
	subHeader?: string;
	actionText?: string;
	onClose: () => void;
}

const MODAL_INFO_ID = "modal-root-info";

const ConnectionDetectModal: React.FC<ConnectionDetectModalProps> = ({ header, subHeader, actionText, onClose }) => {
	const [checkProgress, setCheckProgress] = useState(false);

	/**
	 * @returns {void}
	 */
	const checkConnection = (): void => {
		const online: boolean = navigator.onLine;
		setCheckProgress(true);

		if (!online) {
			const timeout = setTimeout(() => {
				setCheckProgress(false);
				clearTimeout(timeout);
			}, 1000);

			return;
		}

		return onClose();
	};

	return (
		<ModalRoot activeModal={MODAL_INFO_ID} onClose={checkConnection}>
			<ModalCard
				id={MODAL_INFO_ID}
				onClose={checkConnection}
				icon={<img src={T_REX_ICON} alt="Trex" style={{ width: 160 }} />}
				header={header}
				subheader={subHeader}
				actions={
					<Button
						size="l"
						mode="primary"
						onClick={() => checkConnection()}
					>
						{checkProgress ? <Spinner size="small" /> : actionText}
					</Button>
				}
			/>
		</ModalRoot>
	);
};

ConnectionDetectModal.defaultProps = {
	header: "No internet",
	subHeader: "Checking the network cables, modem and router.",
	actionText: "Try again",
};

export default ConnectionDetectModal;
