import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
	providedIn: 'root',
})
export class ProductService {
	private readonly http = inject(HttpClient);

	getProducts() {
		return this.http.get<Product[]>(
			'http://localhost:4201/data/products.json'
		);
	}
}