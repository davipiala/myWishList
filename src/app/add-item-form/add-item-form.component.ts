import { Component, OnInit, ViewChild } from '@angular/core';
import { Item } from '../models/item';
import { Auth } from 'aws-amplify';
import { WishlistManagementService } from '../wishlist-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {
  @ViewChild('addItemForm',{static: false}) formValues;
  user: any;
  userName: string;
  item = new Item('','','');
  prices = ['<$10', '>$10 and <$50',
  '>$50 and <$100', '>$100 and <$500', '>$500'];

  constructor(private wishListService: WishlistManagementService, private _router: Router) {}

  ngOnInit() {
    Auth.currentAuthenticatedUser({
        bypassCache: false
      }).then(async user => {
        this.userName = user.username;
        this.user = user;
      })
      .catch(err => console.log(err));
  }

  addItem() { 
    var newItemInfo = {
      User: this.userName,
      Name: this.item.name,
      Price: this.item.price,
      Link: this.item.link
    };

    let saveReq = this.wishListService.saveItem(newItemInfo);
    saveReq.subscribe(
      () => {
        this.formValues.resetForm();
        this.reloadComponent();
      }, err => {
        console.log(err)
      });
  }

  reloadComponent() {
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._router.onSameUrlNavigation = 'reload';
    this._router.navigate(['/mywishlist']);
  }
}
