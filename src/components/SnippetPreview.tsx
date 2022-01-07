import React from "react";
import { useState, useRef } from "react";
import { TweetURL, TweetHashtag, TweetMention } from "../utils/types/types";
import { CirclePicker } from "react-color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faDownload } from "@fortawesome/free-solid-svg-icons";
import { toPng, toSvg } from "html-to-image";
import Tweet from "./Tweet";
import ExportButton from "./ExportButton";
import ExportOptions from "./ExportOptions";

import "./SnippetPreview.css";

type PreviewProps = {
	tweet_name: string;
	tweet_handle: string;
	tweet_verified?: boolean;
	tweet_pfp_link: string;
	tweet_urls?: Array<TweetURL>;
	tweet_hashtags?: Array<TweetHashtag>;
	tweet_mentions?: Array<TweetMention>;
	tweet_body: string;
	tweet_timestamp: Date;
	tweet_replies: string;
	tweet_retweets: string;
	tweet_likes: string;
};

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

	const [background_color, setBackgroundColor] = useState<string>("#03A9F4");

	const [exportOptions, setExportOptions] = useState({
		scale: 1,
		format: "PNG",
	});

	const ref = useRef<HTMLDivElement>(null);

	const setExport = (obj: { scale: number; format: string }) => {
		console.log(`${obj.scale}; ${obj.format}`);
		setExportOptions(obj);
	};

	const onExpClick = () => {
		if (ref.current === null) {
			return;
		}

		var style = {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			backgroundImage:
				"linear-gradient(135deg,#ffddc7,#ffd5c7,#ffcac8,#fecad6,#ffcde8,#ebcefc,#dfcffe,#cad5f3,#d9eafe)",
		};

		console.log(exportOptions.format);
		if (exportOptions.format === "PNG") {
			toPng(ref.current, {
				cacheBust: true,
				width: 1100,
				height: 700,
				pixelRatio: exportOptions.scale,
				style: {
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					backgroundImage:
						"linear-gradient(135deg,#ffddc7,#ffd5c7,#ffcac8,#fecad6,#ffcde8,#ebcefc,#dfcffe,#cad5f3,#d9eafe)",
				},
			})
				.then((dataURL) => {
					const link = document.createElement("a");
					link.download = "tweet.png";
					link.href = dataURL;
					link.click();
				})
				.catch((err) => {
					console.log(err);
				});
		} else if (exportOptions.format === "SVG") {
			console.log("SVG!");
			toSvg(ref.current, {
				cacheBust: true,
				width: 1100,
				height: 700,
				pixelRatio: exportOptions.scale,
				style: {
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					backgroundImage:
						"linear-gradient(135deg,#ffddc7,#ffd5c7,#ffcac8,#fecad6,#ffcde8,#ebcefc,#dfcffe,#cad5f3,#d9eafe)",
				},
			})
				.then((dataURL) => {
					const link = document.createElement("a");
					link.download = "tweet.png";
					link.href = dataURL;
					link.click();
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	return (
		<div>
			<div className="preview-container-outer">
				<div
					id="options-bar"
					style={{ padding: "20px", marginLeft: "30px", marginRight: "30px" }}
				>
					<FontAwesomeIcon
						id="palette-icon"
						icon={faPalette}
						size="3x"
						style={{ color: "#ccc" }}
					/>
					<div className="divider" style={{ height: "48px" }}></div>
					<CirclePicker
						circleSpacing={4}
						circleSize={22}
						color={background_color}
						onChangeComplete={(color) => setBackgroundColor(color.hex)}
					/>
					<div
						style={{
							marginLeft: "auto",
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<FontAwesomeIcon
							id="export-icon"
							icon={faDownload}
							size="3x"
							style={{ color: "#ccc" }}
						/>
						<div className="divider" style={{ height: "48px" }}></div>
						<ExportOptions onExportOptionsChange={setExport} />
					</div>
					<ExportButton export_action={onExpClick} />
				</div>
				<div>
					{/* Nodes within here will be converted to image format. */}
					<div
						className="preview-container"
						style={{ backgroundColor: background_color }}
					>
						<div ref={ref}>
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
			</div>
		</div>
	);
};

export default SnippetPreview;
