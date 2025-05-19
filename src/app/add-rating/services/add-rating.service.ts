import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { RatingItem } from '../models/rating.Item-entity';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddRatingService extends BaseService<RatingItem> {
  constructor() {
    super()
    this.resourceEndpoint = environment.ratingEndPoint
  }
}
