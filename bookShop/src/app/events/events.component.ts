import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events: any[] = [];

  constructor(private _events: EventService) { }

  ngOnInit(): void {
    this._events.getEvents()
    .subscribe(
      res=> this.events = res,
      err => console.error(err)
    )
  }

}
