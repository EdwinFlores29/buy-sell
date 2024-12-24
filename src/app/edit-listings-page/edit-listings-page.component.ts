import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Listing} from "../types";
import { fakeMyListings} from "../fake-data";

@Component({
  selector: 'app-edit-listings-page',
  templateUrl: './edit-listings-page.component.html',
  styleUrls: ['./edit-listings-page.component.css']
})
export class EditListingsPageComponent implements OnInit{
  listings: Listing[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.listings = fakeMyListings.filter(listing => listing.id === id);
  }

  onSubmit() {
    alert('Your listing has been updated!');
    this.router.navigateByUrl('/my-listings');
  }
}
