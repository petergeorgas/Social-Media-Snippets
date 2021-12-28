/**
 * Retrieves the full-size profile picture link corresponding to the Tweet poster.
 * @param {string} small_icon_url The 48x48 pixel profile picture link returned by the twitter API
 * @throws Error if provided URL does not contain "_normal.jpg".
 * @returns The link to the full-size (300x300 pixel) profile picture link.
 */
const getFullSizePfpLink = (small_icon_url) => {
  if (small_icon_url.includes("_normal.jpg")) {
    return small_icon_url.replace("_normal.jpg", ".jpg");
  } else {
    throw Error("Provided URL did not contain _normal.jpg image suffix.");
  }
};

exports.getFullSizePfpLink = getFullSizePfpLink;
