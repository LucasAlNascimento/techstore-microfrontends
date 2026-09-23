import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadProducts, loadProductsFailure, loadProductsSuccess } from "./catalog.actions";
import { ProductService } from "../services/product.service";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class CatalogEffects {
	private readonly actions$ = inject(Actions);
	private readonly productService = inject(ProductService);

	readonly loadProducts$ = createEffect(() =>
		this.actions$.pipe(
			ofType(loadProducts),

			switchMap(() =>
				this.productService.getProducts().pipe(
					map((products) =>
						loadProductsSuccess({ products })
					),

					catchError(() =>
						of(
							loadProductsFailure({
								error: 'Não foi possível carregar os produtos.',
							})
						)
					)
				)
			)
		)
	);
}