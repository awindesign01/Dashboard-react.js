import Home from "../Common/pages/Home";
import Trending from "../Common/pages/Trending";
import Streaming from "../Common/pages/Streaming";
import Playlist from "../Common/pages/Playlist";
import Bookmark from "../Common/pages/News";
// import LiveStream from "../Common/pages/LiveStream";
// import Tutorial from "../Common/pages/Tutorial";
// import Competition from "../Common/pages/Competition";
// import Community from "../Common/pages/Community";

const routes = [
	{ path: "/", component: Home, exact: true },
	{ path: "/trending", component: Trending },
	{ path: "/streaming", component: Streaming },
	{ path: "/playlist", component: Playlist },
	{ path: "/news", component: Bookmark },
	// { path: "/live-stream", component: LiveStream },
	// { path: "/tutorial", component: Tutorial },
	// { path: "/competition", component: Competition },
	// { path: "/community", component: Community },
];

export default routes;
