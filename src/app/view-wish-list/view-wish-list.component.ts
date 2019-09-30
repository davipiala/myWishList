import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WishlistManagementService } from '../wishlist-management.service';

@Component({
  selector: 'app-view-wish-list',
  templateUrl: './view-wish-list.component.html',
  styleUrls: ['./view-wish-list.component.scss']
})
export class ViewWishListComponent implements OnInit {
  username: string;
  items: any;

  constructor(private route: ActivatedRoute, private wishListService: WishlistManagementService) { }

  ngOnInit() {
    this.username = this.route.snapshot.params.username;
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
  }
}
