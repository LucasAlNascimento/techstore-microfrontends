import { createReducer, on } from "@ngrx/store";
import { initialCatalogState } from "./catalog.state";
import { loadProducts, loadProductsFailure, loadProductsSuccess } from "./catalog.actions";

export const catalogReducer = createReducer(
	initialCatalogState,

	on(loadProducts, (state) => ({
		...state,
		loading: true,
		error: null,
	})),

	on(loadProductsSuccess, (state, { products }) => ({
		...state,
		products,
		loading: false,
		error: null,
	})),

	on(loadProductsFailure, (state, { error }) => ({
		...state,
		loading: false,
		error,
	}))
);