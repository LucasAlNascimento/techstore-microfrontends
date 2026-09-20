import { loadRemoteModule } from '@angular-architects/native-federation';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
	{
		path: 'catalog',
		loadComponent: () =>
			loadRemoteModule('catalog', './Component').then((m) => m.App),
	},
];
