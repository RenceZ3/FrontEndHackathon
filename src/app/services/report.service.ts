import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private options: Object = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': "GET, PUT, POST, DELETE, HEAD, OPTIONS",
      'X-Cassandra-Token': environment.ASTRA_TOKEN,
    })
  };

  constructor(private http: HttpClient) { }

  createRportIncident(data: {description: string, date: string, location: string, image: any, id: string}): Observable<any> {
    const formdata = new FormData();
    console.log('from service', data.date);
    
    formdata.append('description',data.description);
    formdata.append('report_date',data.date);
    formdata.append('location',data.location);
    formdata.append('image', data.image);
    formdata.append('id', data.id);
    

    return this.http.post(`${environment.SECONDARY_LINK}/report`, formdata ,this.options);
  }

  getReportsIncident(): Observable<any> {
    return this.http.get(`${environment.SECONDARY_LINK}/getReports`, this.options);
  }
}
