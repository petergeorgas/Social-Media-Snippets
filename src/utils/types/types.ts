export interface TweetURL{
    start: number,
    end: number,
    url: string,
    expanded_url: string,
    display_url: string,
};
  
export interface TweetHashtag {
    start: number,
    end: number,
    tag: string,
};
  
export interface TweetMention {
    start: number,
    end: number;
    username: string,
    id: string,
};

export interface ISnippet {
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