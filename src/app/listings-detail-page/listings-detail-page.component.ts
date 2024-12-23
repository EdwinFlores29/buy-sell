import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing} from "../types";
import { fakeListings} from "../fake-data";

@Component({
  selector: 'app-listings-detail-page',
  templateUrl: './listings-detail-page.component.html',
  styleUrls: ['./listings-detail-page.component.css']
})
export class ListingsDetailPageComponent {
  listings: Listing[] = [];

  constructor(
    private route: ActivatedRoute,
  ) {}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.listings = fakeListings.filter(listing => listing.id === id);
  }

}
