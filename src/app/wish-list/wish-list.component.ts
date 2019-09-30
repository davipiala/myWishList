import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service'
import { WishlistManagementService } from '../wishlist-management.service';
import { Auth } from 'aws-amplify';
import { int } from 'aws-sdk/clients/datapipeline';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  items: any;
  username: string;
  formHidden = true;
  shareText: string = "Check out my wishlist by following the provided link!";
  url: any

  constructor(private auth: AuthenticationService, private wishListService: WishlistManagementService) {}

  ngOnInit() {
    Auth.currentAuthenticatedUser().then(user => {
      this.username = user.username;
      // send request to get all wish list items for this user
      let getReq = this.wishListService.getItems(this.username);
      getReq.subscribe(
        response => {
          console.log(response);
          this.items = response;
        },
        error => {
          console.log(error);
          this.items = [];
        });
      })
    .catch(err => {
      console.log(err)
      this.items = [];
    });
  }

  deleteItem(item: Object, index: int) {
    // send request to delete the specific item
    let deleteReq = this.wishListService.deleteItem(item);
    deleteReq.subscribe(
      () => {
        // if the item was deleted from the database, delete it from the list of items 
        this.items.splice(index,1);
      },
      error => {
        console.log(error);
      }
    );
  }

  // method to control when the add item form should be displayed
  openForm() {
    this.formHidden = false;
  }
}
