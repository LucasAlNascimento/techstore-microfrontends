import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ProductCard } from '../components/product-card';
import { Store } from '@ngrx/store';
import { loadProducts } from '../store/catalog.actions';
import { selectProducts } from '../store/catalog.selectors';

@Component({
  selector: 'app-catalog-page',
  imports: [AsyncPipe, ProductCard],
  templateUrl: './catalog-page.html',
  styleUrl: './catalog-page.scss',
})
export class CatalogPage implements OnInit {
	private readonly store = inject(Store);

	readonly products$ = this.store.select(selectProducts);

	ngOnInit(): void {
		this.store.dispatch(loadProducts());
	}
}
