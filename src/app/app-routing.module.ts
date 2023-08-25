import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home', component: HomeComponent
  },
  { path: 'settings', loadChildren: () => import('./modules/setup/settings/setting.module').then(m => m.SettingModule) },

   { path: 'currencies', loadChildren: () => import('./modules/setup/currencies/currencies.module').then(m => m.CurrenciesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
