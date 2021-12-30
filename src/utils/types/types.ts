export type  TweetURL = {
    start: number,
    end: number,
    url: string,
    expanded_url: string,
    display_url: string,
};
  
export type TweetHashtag = {
    start: number,
    end: number,
    tag: string,
};
  
export type TweetMention = {
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


export interface TweetData {
    author_id: string,
    created_at: string,
    text: string,
    entities?: {    
        urls?: Array<TweetURL>,
        hashtags?: Array<TweetHashtag>,
        mentions?: Array<TweetMention>,
    }
    possibly_sensitive: false,
    id: string, 
    public_metrics: {
        retweet_count: number,
        reply_count: number,
        like_count: number,
        quote_count: number,
    }
}

export interface TweetIncludes {
    id: string,
    name: string,
    verified: boolean, 
    username: string,
    profile_image_url: string,
}

