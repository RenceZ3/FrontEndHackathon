import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MarketplaceService {

  constructor(private http: HttpClient) { }

  private options: Object = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': "GET, PUT, POST, DELETE, HEAD, OPTIONS",
      'X-Cassandra-Token': environment.ASTRA_TOKEN
    })
    }

  getProductList(): Observable<any> {
    return this.http.get(`${environment.SECONDARY_LINK}/getProducts`, this.options);
  }


}
