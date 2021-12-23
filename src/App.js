import { useEffect, useState } from "react";
import "./App.css";
import Tweet from "./components/Tweet";
function App() {
  const [tweet, setTweet] = useState({});

  useEffect(() => {
    fetch("https://api.twitter.com/2/tweets?ids=1359729466721898498");
  });

  return (
    <div className="App">
      <Tweet
        name="Peter Georgas"
        handle="@peter_georgas"
        pfp_link="https://pbs.twimg.com/profile_images/1399483683317428226/BkPY6kfN_400x400.jpg"
        tweet_body="Hello! I am a nice Tweet!"
        replies="45"
        retweets="10.1K"
        likes="15.8K"
      ></Tweet>
    </div>
  );
}

export default App;
