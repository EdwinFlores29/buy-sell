import {Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-new-listings-page',
  templateUrl: './new-listings-page.component.html',
  styleUrls: ['./new-listings-page.component.css']
})
export class NewListingsPageComponent implements OnInit {
  name: string = '';
  description: string = '';
  price: string = '';

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit(): void {
     alert('New Listing Created!');
    this.router.navigateByUrl('/my-listings');
  }

}
