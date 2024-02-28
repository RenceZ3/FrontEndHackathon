import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

    private options: Object = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': "GET, PUT, POST, DELETE, HEAD, OPTIONS",
      'X-RapidAPI-Key': environment.X_RapidAPI_Key,
      'X-RapidAPI-Host': environment.X_RapidAPI_Host
    })
    }

  getEventLists(): Observable<any> {
    // return this.http.get('');
    return this.http.get(`${environment.SECONDARY_LINK}/api/events`, this.options);
  }
}
