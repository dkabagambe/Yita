import React from "react";
// import { Tweet } from "react-tweet";
import { Timeline } from "react-twitter-widgets";

export default function Tweets() {
  return (
    <div align="center">
      <h2>Blog</h2>

      <div className="tweets">
        <a
          class="twitter-timeline"
          href="https://twitter.com/yitamusawo?ref_src=twsrc%5Etfw"
        >
          Tweets by yitamusawo
        </a>
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "yitamusawo",
          }}
          options={{
            height: "500px",
          }}
        />
      </div>
    </div>
  );
}
