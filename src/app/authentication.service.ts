import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import {AuthenticationDetails, CognitoUser, CognitoUserPool} from 'amazon-cognito-identity-js';
import { Router } from '@angular/router';
import awsmobile from 'src/aws-exports';
import { CostExplorer } from 'aws-sdk/clients/all';


const poolData = {
  UserPoolId: awsmobile.aws_user_pools_id, // Your user pool id here
  ClientId: awsmobile.aws_user_pools_web_client_id // Your client id here  
};

const userPool = new CognitoUserPool(poolData);

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  cognitoUser: any;

  constructor(private router: Router) { }

  // is there a currently signed in user?
  isSignedIn() {
    return userPool.getCurrentUser() != null;
  }

  // log the user out and redirect them to the login page
  doLogout() {
    Auth.signOut({ global : true }).then(
      () => {
        this.router.navigate(['/login'])
      }).catch(
        err => {
          console.log(err)
        }
      );
  }

  // return the current cognitopool user. 
  getCurrentUser(){
    return userPool.getCurrentUser();
  }
}

