import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCountryComponent } from './show-dog/show-country.component';
import { ShowCountriesComponent } from './show-dogs/show-countries.component';
const routes: Routes = [
  {path:'', redirectTo: '/countries', pathMatch:'full'},
  {path: 'countries', component: ShowCountriesComponent},
  {path: 'country/:id', component: ShowCountryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
