import Home from "~/pages/Home";
import Following from "~/pages/Following";

const pulicRoutes = [
    { path: "/", component: Home },
    { path: "/following", component: Following },
];

const privateRoutes = [];

export { pulicRoutes, privateRoutes };
