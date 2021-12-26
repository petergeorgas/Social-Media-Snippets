import { useEffect, useState } from "react";
import "./App.css";
import SnipLinkBox from "./components/SnipLinkBox";
import Tweet from "./components/Tweet";
function App() {

  const [snippet, setSnippet] = useState({
    name: null,
    handle: null,
    pfp_link: null,
    tweet_body: null,
    replies: null,
    retweets: null,
    likes: null,
  });

  const setTweetComponentProps = (obj) => {
    console.log("WARNING!!! LOGGER!");
    setSnippet(obj);
  };

  return (
    <div className="App">
      <SnipLinkBox setTweetComponentProps={setTweetComponentProps} />
      {snippet.name ? <Tweet /> : null}
    </div>
  );
}

export default App;
