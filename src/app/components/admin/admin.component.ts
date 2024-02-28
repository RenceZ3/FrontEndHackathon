import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { SettingService } from '../../services/settings/setting.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit{
  reportLists: any[] = [];
  reportID: any;
  reportDetail: any;
  constructor(private _admin: AdminService, private _setting: SettingService){}

  ngOnInit(): void {
    this.getReportLists();

  }

  getReportLists() {
    this._admin.getReportLists().subscribe(report => {
      const reportList = this._setting.simplifyData(report.data);
      this.reportLists = reportList;
      
      // console.log(reportList);
      if(this.reportID !== undefined) {
        this.reportDetail = this.reportLists.find(id => id.id == this.reportID);
        if(this.reportDetail !== undefined){
        }        
      }
      
      
    });
    
  }

  getID(id: any) {
    this.reportID = id;
    this.getReportLists();
  }

}
