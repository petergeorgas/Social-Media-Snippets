import React, { useState } from "react";
import "./styles/ExportOptions.css";
const ExportOptions = (props: { onExportOptionsChange: Function }) => {
	const [sizeFactor, setSizeFactor] = useState(1);
	const [exportFormat, setExportFormat] = useState("PNG");

	// TODO: Use this one day: const [exportFileName, setExportFileName] = useState("tweet");
	const { onExportOptionsChange } = props;

	return (
		<div className="options-container">
			<div
				id="export-scale-row"
				style={{ display: "flex", flexDirection: "row" }}
			>
				<button
					name="1x"
					className={`option-btn size ${sizeFactor === 1 ? "selected" : ""}`}
					onClick={() => {
						setSizeFactor(1);
						onExportOptionsChange({ scale: 1, exportFormat: exportFormat });
					}}
				>
					1x
				</button>
				<button
					name="2x"
					className={`option-btn size ${sizeFactor === 2 ? "selected" : ""}`}
					onClick={() => {
						setSizeFactor(2);
						onExportOptionsChange({ scale: 2, exportFormat: exportFormat });
					}}
				>
					2x
				</button>
				<button
					name="4x"
					className={`option-btn size ${sizeFactor === 4 ? "selected" : ""}`}
					onClick={() => {
						setSizeFactor(4);
						onExportOptionsChange({ scale: 4, exportFormat: exportFormat });
					}}
				>
					4x
				</button>
			</div>
			<div
				id="export-format-row"
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<button
					name="PNG"
					style={{ marginRight: "5px", marginBottom: "10px" }}
					className={`option-btn ${exportFormat === "PNG" ? "selected" : ""}`}
					onClick={() => {
						setExportFormat("PNG");
						onExportOptionsChange({ scale: sizeFactor, exportFormat: "PNG" });
					}}
				>
					PNG
				</button>
				<button
					name="SVG"
					style={{ marginBottom: "10px" }}
					className={`option-btn ${exportFormat === "SVG" ? "selected" : ""}`}
					onClick={() => {
						setExportFormat("SVG");
						onExportOptionsChange({ scale: sizeFactor, exportFormat: "SVG" });
					}}
				>
					SVG
				</button>
			</div>
		</div>
	);
};

export default ExportOptions;
