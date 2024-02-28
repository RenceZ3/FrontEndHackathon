import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  constructor(private http: HttpClient) { }

  private options: Object = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': "GET, PUT, POST, DELETE, HEAD, OPTIONS",
      'X-Cassandra-Token': environment.X_RapidAPI_Key,
    })
  };

  talktoBotNow(message: string) {
    const reqBody = {
      "content": message
    }
    return this.http.post(`${environment.SECONDARY_LINK}/chatBot`, reqBody, this.options);
  }



}
