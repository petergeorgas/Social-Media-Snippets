import React, { useState } from "react";
import "./SnipLinkBox.css";

function SnipLinkBox() {
  const [link, setLink] = useState(null); // Used to persist the Tweet link.

  const onSnip = (event) => {
    event.preventDefault();
    console.log("Snip!");
  };

  return (
    <div className="snip-box-container">
      <form onSubmit={onSnip}>
        <div id="snip-bar">
          <input
            type="text"
            className="link-box"
            placeholder="Paste a link to a tweet here"
            onChange={(event) => setLink(event.target.value)}
          />
          <button type="submit" className="submit-button">
            Snip
          </button>
        </div>
      </form>
    </div>
  );
}

export default SnipLinkBox;
