import {Component, Input} from '@angular/core';
import {ItemEvent} from '../../model/event.Item-entity';
import {EventApiServiceService} from '../../services/event-api-service.service';
import {EventSummaryItemComponent} from '../event-summary-item/event-summary-item.component';

@Component({
  selector: 'app-event-summary-list',
  imports: [
    EventSummaryItemComponent
  ],
  templateUrl: './event-summary-list.component.html',
  styleUrl: './event-summary-list.component.css'
})
export class EventSummaryListComponent {

  @Input() events2: Array<ItemEvent> = [];

  constructor(private eventService: EventApiServiceService) {}

  ngOnInit() {
  }


}
