export class RatingItem {
  id?: number;
  attendeeId: number;
  eventId: number;
  rating: number
  ratedAt: Date


  constructor() {
    this.id = 0;
    this.attendeeId = 0;
    this.eventId = 0;
    this.rating = 0;
    this.ratedAt = new Date();

  }
}
