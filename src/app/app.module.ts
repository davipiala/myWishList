import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { AuthComponent } from './auth/auth.component';
import { FormsModule} from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { WishlistManagementService } from './wishlist-management.service';
import { ViewWishListComponent } from './view-wish-list/view-wish-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavBarComponent,
    WishListComponent,
    AddItemFormComponent,
    ViewWishListComponent 
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AmplifyService, AuthenticationService, WishlistManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
