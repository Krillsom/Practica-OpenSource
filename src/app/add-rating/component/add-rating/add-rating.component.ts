import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddRatingService } from '../../services/add-rating.service';
import { RatingItem } from '../../models/rating.Item-entity';

@Component({
  selector: 'app-add-rating',
  imports: [CommonModule,FormsModule, MatInputModule, MatButtonModule, MatFormFieldModule],
  templateUrl: './add-rating.component.html',
  styleUrl: './add-rating.component.css'
})
export class AddRatingComponent {
  ticketIdentifier = '';
  rating: number | null = null;
  message = '';
  constructor(private addRatingService: AddRatingService) {}
  public rateEvent() {
    const newRating: RatingItem = {
        attendeeId: 1, 
        eventId: 1,   
        rating: this.rating!, 
        ratedAt: new Date()
      };
    // Aquí colocarás el código de validación y POST a /ratings
    console.log(this.ticketIdentifier, this.rating);
    this.addRatingService.create(newRating).subscribe(
      () => {
        this.message = 'Event successfully rated!';
        this.ticketIdentifier = '';
        this.rating = null;
      },
      () => {
        this.message = 'Failed to submit rating.';
      }
    );

  }
}
