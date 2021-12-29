import { TweetURL, TweetHashtag, TweetMention } from "./types/types";
import DOMPurify from "dompurify";
/**
 * Retrieves the full-size profile picture link corresponding to the Tweet poster.
 * @param {string} small_icon_url The 48x48 pixel profile picture link returned by the twitter API
 * @throws Error if provided URL does not contain "_normal.jpg".
 * @returns The link to the full-size (300x300 pixel) profile picture link.
 */
export const getFullSizePfpLink = (small_icon_url: string): string => {
  if (small_icon_url.includes("_normal.jpg")) {
    return small_icon_url.replace("_normal.jpg", "_bigger.jpg");
  } else {
    throw Error("Provided URL did not contain _normal.jpg image suffix.");
  }
};

/**
 * Generates HTML used to populate the Tweet component's body. With real Tweets,
 * @ (mentions), # (hashtags), and URLs are highlighted. This function does the same
 * generating an HTML string. The HTML string is sanitized using DOMPurify before
 * being returned.
 * 
 * @param tweet_body The plaintext of the tweet, without any highlighting 
 * @param urls  An array of URLs contained within the tweet, returned by the Twitter API
 * @param hashtags An array of hashtags contained within the tweet, returned by the Twitter API
 * @param mentions An array of mentions contained within the tweet, returned by the Twitter API
 * @returns A sanitized HTML string, with correct styling applied for mentions, URLs, and hashtags
 */
export const highlightTweetTags = (tweet_body: string, urls?: Array<TweetURL>, hashtags?: Array<TweetHashtag>, mentions?: Array<TweetMention>): string => {
  tweet_body = `<p id="tweet-body-text">${tweet_body}</p>`
  console.log(`Hashtags: ${hashtags}`)
  if(urls) {
    urls.forEach(url => {
      tweet_body = tweet_body.replace(`${url.url}`, `<span class="tweet-tag">${url.url}</span>`)
    })
  }

  if(hashtags){
    hashtags.forEach(hashtag => {
      tweet_body = tweet_body.replace(`#${hashtag.tag}`, `<span class="tweet-tag">#${hashtag.tag}</span>`)
    });
  }

  if(mentions) {
    mentions.forEach(mention => {
      tweet_body = tweet_body.replace(`@${mention.username}`, `<span class="tweet-tag">@${mention.username}</span>`)
    });
  }


  return DOMPurify.sanitize(tweet_body)
}

/**
 * "Prettifies" a number to make it follow Twitter's standard.
 * For example, 8512 turns into "8,512". 10419 turns into "10.4K". 
 * @param metric_number A normal number returned by Twitter API call
 * @returns A prettified string of the metric number, formatted properly.
*/
export const prettifyTweetMetric = (metric_number: number): string => {
  
  if(metric_number > 999999) { // 1,000,000 or more
    return `${(metric_number/1e6).toFixed(1)}M`;
  } else if(metric_number > 9999) { //  10,000 or more 
    return `${(metric_number/1e3).toFixed(1)}K`;
  } else if (metric_number > 999){ // Less than 10,000 -- we need to add one comma..
    let metric_number_str = metric_number.toString();
    return `${metric_number_str.slice(0,1)},${metric_number_str.slice(1)}`;
  } else { // Less than 1,000 -- need not do anything.
    return metric_number.toString();
  }

}

