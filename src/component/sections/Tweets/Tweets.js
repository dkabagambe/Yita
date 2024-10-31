import React from "react";
import { Tweet } from "react-twitter-widgets";

export default function TweetEmbed() {
  return (
    <div align="center">
      <h2>Featured Tweet</h2>
      <div className="tweet-embed">
        <Tweet tweetId="1851874324094779591" />
      </div>
    </div>
  );
}
