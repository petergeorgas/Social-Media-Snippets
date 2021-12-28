/**
 * Retrieves the full-size profile picture link corresponding to the Tweet poster.
 * @param {string} small_icon_url The 48x48 pixel profile picture link returned by the twitter API
 * @throws Error if provided URL does not contain "_normal.jpg".
 * @returns The link to the full-size (300x300 pixel) profile picture link.
 */
export const getFullSizePfpLink = (small_icon_url: string): string => {
  if (small_icon_url.includes("_normal.jpg")) {
    return small_icon_url.replace("_normal.jpg", ".jpg");
  } else {
    throw Error("Provided URL did not contain _normal.jpg image suffix.");
  }
};

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

