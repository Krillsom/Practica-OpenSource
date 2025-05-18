import {Component, OnInit} from '@angular/core';
import {MatGridList} from '@angular/material/grid-list';
import {
  EventSummaryListComponent
} from '../../../event-sumamary/component/event-summary-list/event-summary-list.component';
import {EventApiServiceService} from '../../../event-sumamary/services/event-api-service.service';
import {ItemEvent} from '../../../event-sumamary/model/event.Item-entity';

@Component({
  selector: 'app-home',
  imports: [
    MatGridList,
    EventSummaryListComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  public events: ItemEvent[] = [];
  constructor(private eventService: EventApiServiceService,) {
  }
  ngOnInit() {
    console.log('inicio')
    this.eventService.getAll().subscribe(eventsReponse => {
      this.events = eventsReponse
    })
  }

}
