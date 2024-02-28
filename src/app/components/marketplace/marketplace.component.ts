import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../services/settings/setting.service';
import { MarketplaceService } from '../../services/marketplace.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrl: './marketplace.component.scss'
})
export class MarketplaceComponent implements OnInit{
  productLists: any[] = [];
  imageSources: SafeUrl[] = [];
  earnings: string = '';
  productID: any;
  mobileNumber: any;
  userDetails: any;

  constructor(private _setting: SettingService, private _marketplace: MarketplaceService, private sanitizer: DomSanitizer, private _user: UserService){}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._marketplace.getProductList().subscribe(product => {
      const productList = this._setting.simplifyData(product.data);
      productList.forEach(earn => {
        if(earn.earnings !== undefined) {
          this.earnings = earn.earnings;
        }
        
      });
       

      this.productLists = productList.filter(product => product.isAvailable === "true");

      if(this.productID !== undefined) {
        const mobile =  this.productLists.find(mobile => mobile.id == this.productID);
        const username = this.productLists.find(user => user.id == this.productID);

        this.mobileNumber = mobile.phone_number;       
        this.userDetails = username.user_id;
      }

      
      if(this.userDetails !== undefined) {
        this._user.getUsers().subscribe(user => {
          const userData = this._setting.simplifyData(user.data)
          const id = userData.find(id => id.id == this.userDetails);
          this.userDetails = `${id.first_name} ${id.last_name}`;
        })
      }
    });
  }

  getMobileNumber(id: any) {
    this.productID = id;
    this.getProducts();
  }
}
