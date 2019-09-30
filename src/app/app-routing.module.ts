import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { ViewWishListComponent } from './view-wish-list/view-wish-list.component';

const routes: Routes = [{
  path: "login",
  component: AuthComponent
}, 
{
  path: "mywishlist",
  component: WishListComponent
},
{
  path: "test",
  component: AddItemFormComponent
},
{
  path: "view/:username",
  component: ViewWishListComponent
},
{
  path: '**',
  redirectTo: 'login',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
