import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventsUrl: string = "http://localhost:3000/api/events";
  private _specialUrl: string = "http://localhost:3000/api/special";

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get<any>(this._eventsUrl);
  }

  getSpecial() {
    return this.http.get<any>(this._specialUrl);
  }
}
