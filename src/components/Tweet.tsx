import React from "react";
import "./Tweet.css";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dateFormat from "dateformat";
import { highlightTweetTags } from "../utils/tweet_utils";
import {TweetURL, TweetHashtag, TweetMention} from "../utils/types/types"

type TweetProps = {
  name: string,
  handle: string, 
  verified?: boolean,
  pfp_link: string,
  tweet_urls?: Array<TweetURL>,
  tweet_hashtags?: Array<TweetHashtag>
  tweet_mentions?: Array<TweetMention>
  tweet_body: string,
  timestamp: Date,
  replies: string,
  retweets: string,
  likes: string,
}

const Tweet = (props: TweetProps): JSX.Element => {
  
  const {
    name,
    handle,
    verified,
    pfp_link,
    tweet_urls,
    tweet_hashtags,
    tweet_mentions,
    tweet_body,
    timestamp,
    replies,
    retweets,
    likes,
  } = props;
  
  return (
    <div>
      <div className="tweet-box">
        <div className="line-break"></div>
        <div className="profile-info">
          <img src={pfp_link} className="pfp" alt="Author profile." />
          <div className="profile-name-container">
            <div className="profile-name-verify">
              <h3 style={{ marginTop: 0, marginBottom: "5px" }}>{name}</h3>
              {verified ? (
                <img
                  id="verify-badge"
                  alt="Twitter verified badge."
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/640px-Twitter_Verified_Badge.svg.png"
                />
              ) : null}
            </div>
            <p style={{ marginTop: 0, marginBottom: 0, color: "#777674" }}>
              {handle}
            </p>
          </div>
          <FontAwesomeIcon id="twitter-logo" icon={faTwitter} size="3x" />
        </div>
        <div className="tweet-body">
          <div
            style={{ marginBottom: 0 }}
            dangerouslySetInnerHTML={{
              __html: highlightTweetTags(
                tweet_body,
                tweet_urls,
                tweet_hashtags,
                tweet_mentions
              ),
            }}
          ></div>
        </div>
        <div className="timestamp">
          <p>{dateFormat(timestamp, "h:MM TT ??? d mmm, yyyy")}</p>
        </div>
        <div className="interactions-container">
          {replies !== "0" ? (
            <p className="tweet-interaction-box">
              <span className="tweet-interaction">{replies}</span>
              {replies === "1" ? " reply" : " replies"}
            </p>
          ) : null}
          {retweets !== "0" ? (
            <p className="tweet-interaction-box">
              <span className="tweet-interaction">{retweets}</span> retweet
              {retweets === "1" ? "" : "s"}
            </p>
          ) : null}
          {likes !== "0" ? (
            <p className="tweet-interaction-box">
              <span className="tweet-interaction">{likes}</span> like
              {retweets === "1" ? "" : "s"}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

Tweet.defaultProps = {
  verified: false,
};

export default Tweet;
