const BASE_URL = "https://api.thecatapi.com/v1";

export async function fetchCategories() {
	const res = await fetch(`${BASE_URL}/categories`);

	return await res.json();
}

export async function fetchImages(
	limit = "10",
	page = "1",
	categoryIds: string | undefined
) {
	const res = await fetch(
		`${BASE_URL}/images/search?limit=${limit}&page=${page}&category_ids=${categoryIds}`
	);

	return await res.json();
}
