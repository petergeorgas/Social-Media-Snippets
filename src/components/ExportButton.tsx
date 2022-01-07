import React from "react";
import "./styles/ExportButton.css";

type ExportButtonProps = {
	export_action: React.MouseEventHandler<HTMLButtonElement>;
};

const ExportButton = (props: ExportButtonProps) => {
	return (
		<button className="export-btn" onClick={props.export_action}>
			Export
		</button>
	);
};

export default ExportButton;
