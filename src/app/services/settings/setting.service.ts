import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor() { }

  simplifyData(data: any): any[] {
    return Object.keys(data).map((ele) => data[ele]);
  }
}
