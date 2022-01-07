import React, { useState } from 'react'
import "./styles/ExportOptions.css"
const  ExportOptions = () => {
    const[sizeFactor, setSizeFactor] = useState(1); 
    const[exportFormat, setExportFormat] = useState("PNG");
    const[exportFileName, setExportFileName] = useState("tweet");


    return (
        <div className="options-container">
            
            <div id="export-scale-row" style={{display: "flex", flexDirection:"row"}}>
                <button name="1x" className={`option-btn size ${sizeFactor === 1 ? "selected" : ""}`}  onClick={() => {setSizeFactor(1)}}>1x</button>
                <button name="2x" className={`option-btn size ${sizeFactor === 2 ? "selected" : ""}`} onClick={() => {setSizeFactor(2)}}>2x</button>
                <button name="4x" className={`option-btn size ${sizeFactor === 4 ? "selected" : ""}`} onClick={() => {setSizeFactor(4)}}>4x</button>
            </div>
            <div id="export-format-row" style={{display: "flex", flexDirection: "row", justifyContent: "center",alignItems: "center"}}>
                <button name="PNG" style={{marginRight: "5px", marginBottom: "10px"}} className={`option-btn ${exportFormat === "PNG" ? "selected" : ""}`} onClick={() => {setExportFormat("PNG")}}>PNG</button>
                <button name="SVG" style={{marginBottom: "10px"}}className={`option-btn ${exportFormat === "SVG" ? "selected" : ""}`} onClick={() => {setExportFormat("SVG")}}>SVG</button>
            </div>
        </div>
    )
}

export default ExportOptions
