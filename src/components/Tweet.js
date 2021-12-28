import React from "react";
import "./Tweet.css";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
function Tweet(props) {
  const {
    name,
    handle,
    pfp_link,
    tweet_body,
    timestamp,
    replies,
    retweets,
    likes,
  } = props;

  return (
    <div>
      <div className="tweet-box">
        <div className="profile-info">
          <img src={pfp_link} className="pfp" />
          <div className="profile-name-container">
            <div className="profile-name-verify">
              <h3 style={{ marginTop: 0, marginBottom: "5px" }}>{name}</h3>
              <img
                id="verify-badge"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/640px-Twitter_Verified_Badge.svg.png"
              />
            </div>
            <p style={{ marginTop: 0, marginBottom: 0, color: "#777674" }}>
              {handle}
            </p>
          </div>
          <FontAwesomeIcon id="twitter-logo" icon={faTwitter} size="3x" />
        </div>
        <div className="tweet-body">
          <p style={{ marginBottom: 0 }}>{tweet_body}</p>
        </div>
        <div className="timestamp">
          <p>10:41 PM • 9 Dec, 2021</p>
        </div>
        <div className="interactions-container">
          <p className="tweet-interaction-box">
            <span className="tweet-interaction">{replies}</span>
            {replies === "1" ? " reply" : " replies"}
          </p>
          <p className="tweet-interaction-box">
            <span className="tweet-interaction">{retweets}</span> retweet
            {retweets === "1" ? "" : "s"}
          </p>
          <p className="tweet-interaction-box">
            <span className="tweet-interaction">{likes}</span> like
            {retweets === "1" ? "" : "s"}
          </p>
        </div>
      </div>
    </div>
  );
}

Tweet.propTypes = {
  name: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  tweet_body: PropTypes.string.isRequired,
  replies: PropTypes.string.isRequired,
  retweets: PropTypes.string.isRequired,
  likes: PropTypes.string.isRequired,
};

export default Tweet;
