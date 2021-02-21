import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.scss']
})
export class SpecialComponent implements OnInit {

  events: any[] = [];

  constructor(private _events: EventService,
              private _router: Router) { }

  ngOnInit(): void {
    this._events.getSpecial()
    .subscribe(
      res=> this.events = res,
      err => {
        if (err instanceof HttpErrorResponse) {
          if(err.status === 401) {
            this._router.navigate(['/login'])
          }
        }
      }
    )
  }

}
