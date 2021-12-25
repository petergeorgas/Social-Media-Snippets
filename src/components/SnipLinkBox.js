import React, { useState } from "react";
import "./SnipLinkBox.css";

const tweet_status_regex = new RegExp(
  /^https?:\/\/twitter\.com\/(\w+)\/status\/(\d+)$/
);

const twitter_api_endpoint =
  "https://social-media-snippets-functions.vercel.app/api/twitter";

function SnipLinkBox() {
  const [link, setLink] = useState(undefined); // Used to persist the Tweet link.
  const [invalidLink, setInvalidLink] = useState(false);

  const onSnip = (event) => {
    // Here, we are going to need to verify that the link is to a tweet.
    event.preventDefault();

    const split_link = tweet_status_regex.exec(link);
    // Match RegEx to make sure a Tweet link was input -- so we can properly generate a snippet.
    if (split_link && split_link.length > 0) {
      console.log("Twitter status link has been entered!");
      if (invalidLink) setInvalidLink(false); // If invalid link was set to true, reset it.
      const [link, account_name, status_id] = split_link;
      const req = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          status_id: status_id,
        },
      };

      fetch(twitter_api_endpoint, req).then((res) => {
        console.log(res.json());
      });
    } else {
      console.log("Not a Tweet status link.");
      // Display invalid link
      setInvalidLink(true);
    }
  };

  return (
    <div className="snip-box-container">
      <form onSubmit={onSnip}>
        <div id="snip-bar">
          <input
            type="text"
            className={invalidLink ? "link-box link-box-invalid" : "link-box"}
            placeholder="Paste a link to a tweet here"
            onChange={(event) => setLink(event.target.value)}
            value={link}
          />
          <button type="submit" className="submit-button">
            Snip
          </button>
        </div>
        {invalidLink ? <p id="invalid-link-label">Invalid Tweet link</p> : null}
      </form>
    </div>
  );
}

export default SnipLinkBox;
