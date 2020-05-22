import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './crud/home/home.component';
import { DetailsComponent } from './crud/details/details.component';
import { CreateComponent } from './crud/create/create.component';
import { UpdateComponent } from './crud/update/update.component';

const routes: Routes = [

  { path: '', redirectTo: 'crud/home', pathMatch: 'full'},
  { path: 'crud', redirectTo: 'crud/home', pathMatch: 'full'},
  { path: 'crud/home', component: HomeComponent },
  { path: 'crud/details/:productId', component: DetailsComponent },
  { path: 'crud/create', component: CreateComponent },
  { path: 'crud/update/:id', component: UpdateComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
