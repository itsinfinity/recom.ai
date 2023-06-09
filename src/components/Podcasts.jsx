import React, { useState } from "react";
import Hero from "./Hero";
import PodcastResult from "./PodcastResult";
function Podcasts() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <Hero category={"Podcasts"} howto={" to listen"} herobg={"url('./img/podcastbg.png')"} podcastsQuery={setQuery} />

      {/* Show Result after search */}
      <PodcastResult query={query} />
    </div>
  );
}

export default Podcasts;
