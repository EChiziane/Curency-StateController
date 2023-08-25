import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingRoutingModule } from './setting-routing.module';
import { SettingsComponent } from './components/settings/settings.component';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {settingsEffects} from "./store/effects";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {settingReducer} from "./store/reducers/settings.reducer";
import {SETTING_STATE_NAME} from "./store/selectors/settings.selectors";
import { SettingsListComponent } from './components/settings/settings-list/settings-list.component';
import {GridModule} from "@syncfusion/ej2-angular-grids";
import { SettingAddComponent } from './components/settings/setting-add/setting-add.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/setup/', '.json');
}

@NgModule({
  declarations: [
    SettingsComponent,
    SettingsListComponent,
    SettingAddComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    StoreModule.forFeature( SETTING_STATE_NAME, settingReducer, {}),
    EffectsModule.forFeature(settingsEffects),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        //useFactory: HttpLoaderFactory,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
      isolate: true,
      extend: true
    }),
    GridModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class SettingModule { }
