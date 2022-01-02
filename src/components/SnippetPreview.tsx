import React from 'react'
import { useState } from 'react'
import "./SnippetPreview.css"
import {TweetURL, TweetHashtag, TweetMention} from "../utils/types/types"
import {CirclePicker} from 'react-color'

import Tweet from './Tweet'

type PreviewProps = {
    tweet_name: string,
    tweet_handle: string, 
    tweet_verified?: boolean,
    tweet_pfp_link: string,
    tweet_urls?: Array<TweetURL>,
    tweet_hashtags?: Array<TweetHashtag>
    tweet_mentions?: Array<TweetMention>
    tweet_body: string,
    tweet_timestamp: Date,
    tweet_replies: string,
    tweet_retweets: string,
    tweet_likes: string,
}
 
const SnippetPreview = (props: PreviewProps) => {
    const {
        tweet_name,
        tweet_handle,
        tweet_verified,
        tweet_pfp_link,
        tweet_urls,
        tweet_hashtags,
        tweet_mentions,
        tweet_body,
        tweet_timestamp,
        tweet_replies,
        tweet_retweets,
        tweet_likes,
      } = props;

    const [background_color, setBackgroundColor] = useState<string>("#787878");

    return (
        <div>
            <div className="preview-container-outer">
                <div id="options-bar" style={{padding:"20px", marginLeft: "30px", marginRight: "30px"}}>
                    <CirclePicker circleSpacing={4} circleSize={22} color={background_color} onChangeComplete={(color) => setBackgroundColor(color.hex)}/>
                </div>
                <div className="preview-container" style={{backgroundColor: background_color}}>
                    <Tweet
                    variant="light"
                    name={tweet_name}
                    handle={tweet_handle}
                    verified={tweet_verified}
                    pfp_link={tweet_pfp_link}
                    tweet_body={tweet_body}
                    tweet_urls={tweet_urls}
                    tweet_hashtags={tweet_hashtags}
                    tweet_mentions={tweet_mentions}
                    timestamp={tweet_timestamp}
                    replies={tweet_replies}
                    retweets={tweet_retweets}
                    likes={tweet_likes}
                    />
                </div>
            </div>
        </div>
    )
}

export default SnippetPreview

