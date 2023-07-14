import { ReactNode, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
	addImages,
	addCategories,
	selectCategories,
	selectCurrentCategory,
	selectLimit,
	selectPage,
} from "./counterSlice";
import { fetchCategories, fetchImages } from "./counterApi";
import Spinner from "../../components/Spinner";

interface Props {
	children: ReactNode;
}

function Fetcher({ children }: Props) {
	const categories = useAppSelector(selectCategories);

	const location = useLocation();
	const params = useParams();

	const dispatch = useAppDispatch();
	const currentCategoryId = useAppSelector(selectCurrentCategory);
	const limit = useAppSelector(selectLimit);
	const page = useAppSelector(selectPage);

	useEffect(() => {
		async function fetch() {
			const categories = await fetchCategories();
			dispatch(addCategories(categories));
		}
		fetch();
	}, []);

	useEffect(() => {
		async function fetch() {
			const images = await fetchImages(limit, page, currentCategoryId);
			dispatch(addImages(images));
		}
		if (currentCategoryId) {
			fetch();
		}
	}, [params, location, limit, page, currentCategoryId]);

	return <>{categories ? children : <Spinner />}</>;
}

export default Fetcher;
