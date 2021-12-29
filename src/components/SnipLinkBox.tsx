import React, { FormEvent, useState } from "react";
import "./SnipLinkBox.css";
import { getFullSizePfpLink, prettifyTweetMetric } from "../utils/tweet_utils";
import { ISnippet } from "../utils/types/types";

const tweet_status_regex: RegExp = new RegExp(
  /^https?:\/\/twitter\.com\/(\w+)\/status\/(\d+)$/
);

const twitter_api_endpoint: string =
  "https://social-media-snippets-functions.vercel.app/api/twitter";


type SnapLinkBoxProps = {
  setTweetComponentProps: Function,
}


const SnipLinkBox = (props: SnapLinkBoxProps): JSX.Element => {
  const [link, setLink] = useState<string>(""); // Used to persist the Tweet link.

  const [invalidLink, setInvalidLink] = useState<boolean>(false);
  const {setTweetComponentProps} = props

  const onSnip = (event: FormEvent): void => {
    // Here, we are going to need to verify that the link is to a tweet.
    event.preventDefault();

    
    const split_link = tweet_status_regex.exec(link);
    // Match RegEx to make sure a Tweet link was input -- so we can properly generate a snippet.
    if (split_link && split_link.length > 0) {
      console.log("Twitter status link has been entered!");
      if (invalidLink) setInvalidLink(false); // If invalid link was set to true, reset it.
      const [link, account_name, status_id] = split_link;
      console.log(`Link: ${link}\nAccount: ${account_name}\nID:${status_id}`);
      const req = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status_id: status_id,
        }),
      };

      fetch(twitter_api_endpoint, req)
        .then((resp) => {
          // Resolve the JSON promise
          resp
            .json()
            .then((data) => {
              console.log(data);
              let tweetData = data.data[0];
              let includedUserData = data.includes.users[0];
              console.log(
                `TweetData: ${JSON.stringify(
                  tweetData
                )}\nIncludes: ${JSON.stringify(includedUserData)}.`
              );

              let snippetState: ISnippet = {
                name: includedUserData.name,
                handle: `@${includedUserData.username}`,
                verified: includedUserData.verified,
                pfp_link: getFullSizePfpLink(
                  includedUserData.profile_image_url
                ),
                tweet_body: tweetData.text,
                timestamp: new Date(tweetData.created_at),
                replies: prettifyTweetMetric(
                  tweetData.public_metrics.reply_count
                ),
                retweets: prettifyTweetMetric(
                  tweetData.public_metrics.retweet_count
                ),
                likes: prettifyTweetMetric(tweetData.public_metrics.like_count),
              };

              if (tweetData.entities) {
                if (tweetData.entities.urls)
                  snippetState.tweet_urls = tweetData.entities.urls;
                if (tweetData.entities.hashtags)
                  snippetState.tweet_hashtags = tweetData.entities.hashtags;
                if (tweetData.entities.mentions)
                  snippetState.tweet_mentions = tweetData.entities.mentions;
              }

              setTweetComponentProps(snippetState);
            })
            .catch((err) => {
              console.log(
                `There was an error resolving the JSON returned by the API.\n${err}`
              );
            });
        })
        .catch((err) => {
          console.log(err);
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
