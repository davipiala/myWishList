import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(public amplifyService: AmplifyService, public router: Router) {
    this.amplifyService = amplifyService;
    this.amplifyService.authStateChange$.subscribe(authState =>
      {
        // redirect to the mywishlist page when user signs in
        if (authState.state === 'signedIn') {
          this.router.navigate(['/mywishlist']);
        }
      });
   }

  ngOnInit() {
  }

}
