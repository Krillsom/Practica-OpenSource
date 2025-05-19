import { Component, OnInit } from '@angular/core';
import { AddRatingComponent } from '../../../add-rating/component/add-rating/add-rating.component';

@Component({
  selector: 'app-rating',
  imports: [AddRatingComponent],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Initialization logic here
  }

  // Add any additional methods or properties as needed

}
