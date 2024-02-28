import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

    private options: Object = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': "GET, PUT, POST, DELETE, HEAD, OPTIONS",
      'X-Cassandra-Token': environment.ASTRA_TOKEN,
    })
    };

    getUsers(): Observable<any> {
      return this.http.get(`${environment.SECONDARY_LINK}/getUsers`, this.options);
    }

    getUserDetails(username: string, password: string): Observable<any> {      
      return this.http.get(`${environment.SECONDARY_LINK}/getUser/${username}/${password}`, this.options);
    }


    insertUserDetails(data: {id: string, fname: string, lname: string, uname: string, pass: string, image: any }): Observable<any> {
      const formdata = new FormData();
      formdata.append('id', data.id);
      formdata.append('first_name', data.fname);
      formdata.append('last_name', data.lname);
      formdata.append('password', data.pass);
      formdata.append('username', data.uname);
      formdata.append('role', 'admin');
      formdata.append('image', data.image);
      return this.http.post<any>(`${environment.SECONDARY_LINK}/addUsers`, formdata, this.options);
    }
}
