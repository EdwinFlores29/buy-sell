import {Component, OnInit} from '@angular/core';
import { Listing} from "../types";
import { fakeMyListings } from "../fake-data";

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css']
})
export class MyListingsPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor() { }

  ngOnInit() {
    this.listings = fakeMyListings;
  }
  onDeleteClicked(listingId: string) {
    alert(`Deleting your listing ${listingId} has been deleted!`);
  }

}
