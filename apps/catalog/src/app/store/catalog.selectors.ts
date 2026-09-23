import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CatalogState } from "./catalog.state";

export const selectCatalogState =
	createFeatureSelector<CatalogState>('catalog');

export const selectProducts = createSelector(
	selectCatalogState,
	(state) => state.products
);