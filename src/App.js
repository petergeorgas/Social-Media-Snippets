import { useState } from "react";
import "./App.css";
import SnipLinkBox from "./components/SnipLinkBox";
import Tweet from "./components/Tweet";
function App() {
  const [snippet, setSnippet] = useState({
    name: null,
    handle: null,
    verified: false,
    pfp_link: null,
    tweet_body: null,
    tweet_urls: null,
    tweet_hashtags: null,
    tweet_mentions: null,
    timestamp: null,
    replies: null,
    retweets: null,
    likes: null,
  });

  const setTweetComponentProps = (obj) => {
    setSnippet(obj);
  };

  return (
    <div className="App">
      <SnipLinkBox setTweetComponentProps={setTweetComponentProps} />
      {snippet.name ? (
        <Tweet
          name={snippet.name}
          handle={snippet.handle}
          verified={snippet.verified}
          pfp_link={snippet.pfp_link}
          tweet_body={snippet.tweet_body}
          tweet_urls={snippet.tweet_urls}
          tweet_hashtags={snippet.tweet_hashtags}
          tweet_mentions={snippet.tweet_mentions}
          timestamp={snippet.timestamp}
          replies={snippet.replies}
          retweets={snippet.retweets}
          likes={snippet.likes}
        />
      ) : null}
    </div>
  );
}

export default App;
