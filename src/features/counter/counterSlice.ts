import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { CategoryState, ImagesState, IState } from "../types";

const initialState: IState = {
	limit: "10",
	page: "1",
	currentCategory: undefined,
};

export const catSlice = createSlice({
	name: "cats",
	initialState,
	reducers: {
		addImages: (state, action: PayloadAction<ImagesState[]>) => {
			if (state.images) {
				state.images = [...state.images, ...action.payload];
			} else {
				state.images = action.payload;
			}
		},

		addCategories: (state, action: PayloadAction<CategoryState[]>) => {
			state.categories = action.payload;
		},
		setCurrentCategory: (state, action: PayloadAction<string | undefined>) => {
			state.images = [];
			state.currentCategory = action.payload;
		},

		setLimit: (state, action: PayloadAction<string>) => {
			state.limit = String(Number(state.limit) + Number(action.payload));
		},

		setPage: (state, action: PayloadAction<string>) => {
			state.page = String(Number(state.page) + Number(action.payload));
		},
	},
});

export const {
	addImages,
	addCategories,
	setCurrentCategory,
	setLimit,
	setPage,
} = catSlice.actions;

export const selectCategories = (state: RootState) => state.cat.categories;
export const selectImages = (state: RootState) => state.cat.images;
export const selectLimit = (state: RootState) => state.cat.limit;
export const selectPage = (state: RootState) => state.cat.page;
export const selectCurrentCategory = (state: RootState) =>
	state.cat.currentCategory;

export default catSlice.reducer;
