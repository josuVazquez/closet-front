import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from '@core/interceptors/loading.interceptor';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ItemEffects } from '@core/item/redux/item.effect';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { environment } from '@environment';
import { OutfitEffects } from '@core/outfit/redux/outfit.effect';
import { outfitReducer, OutfitState } from '@core/outfit/redux/outfit.reducers';
import { itemReducer, ItemState } from '@core/item/redux/item.reducers';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { TokenInterceptor } from '@core/interceptors/token.interceptor';

export const createTranslateLoader = (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json');

/* App reducer */

interface AppState {
  itemState: ItemState;
  outfitState: OutfitState;
}

export const reducers: ActionReducerMap<AppState> = {
  itemState: itemReducer,
  outfitState: outfitReducer
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    EffectsModule.forRoot([ItemEffects, OutfitEffects]),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      name: 'Closet App',
      logOnly: environment.production
    })
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
