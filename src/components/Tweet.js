import React from "react";
import "./Tweet.css";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Tweet() {
  return (
    <div>
      <div className="tweet-box">
        <div className="profile-info">
          <img
            src="https://pbs.twimg.com/profile_images/1399483683317428226/BkPY6kfN_400x400.jpg"
            className="pfp"
          />
          <div className="profile-name-container">
            <h3 style={{ marginTop: 0, marginBottom: "5px" }}>Peter Georgas</h3>
            <p style={{ marginTop: 0, marginBottom: 0, color: "#777674" }}>
              @peter_georgas
            </p>
          </div>
          <FontAwesomeIcon id="twitter-logo" icon={faTwitter} size="3x" />
        </div>
        <div className="tweet-body">
          <p style={{ marginBottom: 0 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare
            quam vive
          </p>
        </div>
        <div className="timestamp">
          <p>10:41 PM • 9 Dec, 2021</p>
        </div>
        <div className="interactions-container">
          <p className="tweet-interaction-box">
            <span className="tweet-interaction">1,551</span> replies
          </p>
          <p className="tweet-interaction-box">
            <span className="tweet-interaction">10.1K</span> retweets
          </p>
          <p className="tweet-interaction-box">
            <span className="tweet-interaction">4,892</span> likes
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
