import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { LOCALE_ID } from '@angular/core';
import es from '@angular/common/locales/es';
import extraEs from '@angular/common/locales/extra/es';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { registerLocaleData } from '@angular/common';

if (environment.production) {
  enableProdMode();
}

registerLocaleData(es, 'es', extraEs);

platformBrowserDynamic().bootstrapModule(AppModule, {
    providers: [
      {
        provide: LOCALE_ID,
        useValue: 'es'
      }
    ]
  })
  .catch(err => console.error(err));
