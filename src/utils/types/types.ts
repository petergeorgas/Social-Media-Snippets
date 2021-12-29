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