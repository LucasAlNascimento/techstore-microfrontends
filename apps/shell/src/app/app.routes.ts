import { loadRemoteModule } from '@angular-architects/native-federation';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
	{
		path: 'catalog',
		loadChildren: () =>
			loadRemoteModule('catalog', './Routes').then((m) => m.appRoutes),
	},
];
