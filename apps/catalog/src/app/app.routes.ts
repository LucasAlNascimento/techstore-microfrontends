import { Route } from '@angular/router';
import { CatalogPage } from './pages/catalog-page';
import { provideState } from '@ngrx/store';
import { catalogReducer } from './store/catalog.reducer';
import { provideEffects } from '@ngrx/effects';
import { CatalogEffects } from './store/catalog.effects';

export const appRoutes: Route[] = [
	{
		path: '',
		component: CatalogPage,
		providers: [
			provideState('catalog', catalogReducer),
			provideEffects(CatalogEffects),
		],
	},
];
