import { Component, inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import { AsyncPipe } from '@angular/common';
import { ProductCard } from '../components/product-card';

@Component({
  selector: 'app-catalog-page',
  imports: [AsyncPipe, ProductCard],
  templateUrl: './catalog-page.html',
  styleUrl: './catalog-page.scss',
})
export class CatalogPage {
	private readonly productService = inject(ProductService);

	readonly products$ = this.productService.getProducts();
}
