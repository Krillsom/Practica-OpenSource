import {Component, Input, input} from '@angular/core';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import {ItemEvent} from '../../model/event.Item-entity';
import {EventApiServiceService} from '../../services/event-api-service.service';

@Component({
  selector: 'app-event-summary-item',
  imports: [
    MatCard,
    MatCardContent,
    MatCardTitle
  ],
  templateUrl: './event-summary-item.component.html',
  styleUrl: './event-summary-item.component.css'
})


export class EventSummaryItemComponent {
  @Input() event!: ItemEvent;
  constructor(private eventService: EventApiServiceService) {}



}
