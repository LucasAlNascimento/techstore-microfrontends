import { Product } from "../models/product.model";

export interface CatalogState {
	products: Product[];
	loading: boolean;
	error: string | null;
}

export const initialCatalogState: CatalogState = {
	products: [],
	loading: false,
	error: null,
}