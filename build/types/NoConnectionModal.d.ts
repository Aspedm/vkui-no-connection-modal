import React from "react";
export interface ConnectionDetectModalProps {
    header?: string;
    subHeader?: string;
    actionText?: string;
    onClose: () => void;
}
declare const ConnectionDetectModal: React.FC<ConnectionDetectModalProps>;
export default ConnectionDetectModal;
