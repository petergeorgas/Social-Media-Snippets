import { useState } from "react";
import "./App.css";
import SnipLinkBox from "./components/SnipLinkBox";
import Tweet from "./components/Tweet";
function App() {
  const [snippet, setSnippet] = useState({
    name: null,
    handle: null,
    pfp_link: null,
    tweet_body: null,
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
          pfp_link={snippet.pfp_link}
          tweet_body={snippet.tweet_body}
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
