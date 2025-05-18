import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {environment} from '../../../environments/environment';
import {ItemEvent} from '../model/event.Item-entity';

@Injectable({
  providedIn: 'root'
})
export class EventApiServiceService extends BaseService<ItemEvent>{
  constructor() {
    super()
    this.resourceEndpoint = environment.eventsEndPoint
  }
}

