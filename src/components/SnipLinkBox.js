import React from 'react'
import "./SnipLinkBox.css"


function SnipLinkBox() {
    return (
        <div className="snip-box-container">
            <form>
                <div id="snip-bar">
                    <input type="text" className="link-box"placeholder="Paste a link to a tweet here" />
                    <button type="submit" className="submit-button">Snip</button>
                </div>
            </form>
        </div>
    )
}

export default SnipLinkBox
