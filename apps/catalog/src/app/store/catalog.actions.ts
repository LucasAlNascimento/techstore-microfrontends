import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product.model';

export const loadProducts = createAction(
	'[Catalog Page] Load Products'
);

export const loadProductsSuccess = createAction(
	'[Catalog API] Load Products Success',
	props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
	'[Catalog API] Load Products Failure',
	props<{ error: string }>()
);