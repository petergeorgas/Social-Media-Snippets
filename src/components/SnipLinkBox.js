import React, { useState } from "react";
import "./SnipLinkBox.css";

const tweet_status_regex = new RegExp(
  /^https?:\/\/twitter\.com\/(\w+)\/status\/(\d+)$/
);

function SnipLinkBox() {
  const [link, setLink] = useState(undefined); // Used to persist the Tweet link.

  const onSnip = (event) => {
    // Here, we are going to need to verify that the link is to a tweet.
    event.preventDefault();

    if (tweet_status_regex.test(link)) {
      console.log("Twitter status link has been entered!");
      const id = link.split("/").at(-1);
      console.log(`ID:${id}`);
    } else {
      console.log("Not a Tweet status link.");
      // Display invalid link
    }
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
            value={link}
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
