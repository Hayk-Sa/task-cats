export interface CategoryState {
	id: number;
	name: string;
}

export interface ImagesState {
	breeds: any[];
	categories: CategoryState;
	id: string;
	url: string;
	width: number;
	height: number;
}

export interface IState {
	categories?: CategoryState[];
	images?: ImagesState[];
	currentCategory?: string;
	limit: string;
	page: string;
}
