import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { catalogReducer } from './store/catalog.reducer';
import { provideEffects } from '@ngrx/effects';
import { CatalogEffects } from './store/catalog.effects';

export const appConfig: ApplicationConfig = {
  providers: [
		provideBrowserGlobalErrorListeners(),
		provideRouter(appRoutes),
		provideHttpClient(),

		provideStore(),
		provideState('catalog', catalogReducer),
		provideEffects(CatalogEffects),
	],
};
