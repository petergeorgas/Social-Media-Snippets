import { useState } from "react";
import "./App.css";
import SnipLinkBox from "./components/SnipLinkBox";
import SnippetPreview from "./components/SnippetPreview";
import { TweetHashtag, TweetMention, TweetURL } from "./utils/types/types";

type Snippet = {
	name: string;
	handle: string;
	verified: false;
	pfp_link: string;
	tweet_body: string;
	tweet_urls: Array<TweetURL>;
	tweet_hashtags: Array<TweetHashtag>;
	tweet_mentions: Array<TweetMention>;
	timestamp: Date;
	replies: string;
	retweets: string;
	likes: string;
};
//import Tweet from "./components/Tweet";
function App() {
	const [snippet, setSnippet] = useState({
		name: "",
		handle: "",
		verified: false,
		pfp_link: "",
		tweet_body: "",
		tweet_urls: Array<TweetURL>(),
		tweet_hashtags: Array<TweetHashtag>(),
		tweet_mentions: Array<TweetMention>(),
		timestamp: new Date(),
		replies: "",
		retweets: "",
		likes: "",
	});

	const setTweetComponentProps = (obj: Snippet) => {
		setSnippet(obj);
	};

	return (
		<div className="App">
			<SnipLinkBox setTweetComponentProps={setTweetComponentProps} />
			{snippet.name !== "" ? (
				<SnippetPreview
					tweet_name={snippet.name}
					tweet_handle={snippet.handle}
					tweet_verified={snippet.verified}
					tweet_pfp_link={snippet.pfp_link}
					tweet_body={snippet.tweet_body}
					tweet_urls={snippet.tweet_urls}
					tweet_hashtags={snippet.tweet_hashtags}
					tweet_mentions={snippet.tweet_mentions}
					tweet_timestamp={snippet.timestamp}
					tweet_replies={snippet.replies}
					tweet_retweets={snippet.retweets}
					tweet_likes={snippet.likes}
				/>
			) : null}
		</div>
	);
}

export default App;
