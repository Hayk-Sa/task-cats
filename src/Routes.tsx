import { useRoutes } from "react-router-dom";

import { lazy, Suspense } from "react";
import Spinner from "./components/Spinner";

const Empty = lazy(() => import("./components/./styled/EmptyPage"));
const Gallery = lazy(() => import("./components/Gallery"));
const NotFound = lazy(() => import("./components/NotFound"));

const routes = [
	{
		path: "",
		element: (
			<Suspense fallback={<Spinner />}>
				<Empty />
			</Suspense>
		),
	},
	{
		path: ":categoryName",
		element: (
			<Suspense fallback={<Spinner />}>
				<Gallery />
			</Suspense>
		),
	},
	{
		element: (
			<Suspense fallback={<Spinner />}>
				<NotFound />
			</Suspense>
		),
	},
];

function Router() {
	return useRoutes(routes);
}

export default Router;
