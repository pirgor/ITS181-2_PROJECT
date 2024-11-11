import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDogsComponent } from './show-dogs/show-dogs.component';
import { ShowDogComponent } from './show-dog/show-dog.component';
import { AddDogComponent } from './add-dog/add-dog.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path: 'dogs', component: ShowDogsComponent},
  {path: 'dogs/:id', component: ShowDogComponent},
  {path: 'add', component: AddDogComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
