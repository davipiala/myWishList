import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Item } from './models/item';
import 'rxjs/add/operator/map';

const API_URL:string = 'https://1r4jwmryc7.execute-api.us-east-2.amazonaws.com/dev/item';

@Injectable({
  providedIn: 'root'
})
export class WishlistManagementService {

  constructor(private http: HttpClient) { }

  // send api request to delete item from the database
  deleteItem(itemInfo: Object) {
    let params = new HttpParams().set('itemInfo', JSON.stringify(itemInfo));
    let options = {params: params};
    return this.http.delete(API_URL, options);
  }

  // send api request to get all wish list items the given user has
  getItems(username: string) {
    let params = new HttpParams().set('username', username);
    let options = {params: params};
    return this.http.get(API_URL, options);
  }

  // send api request to save a new item to the database
  saveItem(itemInfo: Object) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = {headers: headers};
    return this.http.post(API_URL, itemInfo, options);
  }
}
