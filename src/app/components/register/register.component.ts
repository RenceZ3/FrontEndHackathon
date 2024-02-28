import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { SettingService } from '../../services/settings/setting.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  formRegister!: FormGroup;
  maxID:number = 0;
  @ViewChild('fileInput') fileInput!: ElementRef;


  constructor(private formBuilder: FormBuilder, private _user: UserService, private _setting: SettingService, private router: Router){
    this.formRegister = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      verPassword: ['', [Validators.required, Validators.minLength(8)]],
      username: ['', [Validators.required, Validators.minLength(5)]],
      imageUpload: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getHighestID();
  }
  

  getHighestID() {
    this._user.getUsers().subscribe(user => {
      this._setting.simplifyData(user.data).forEach(id => {
      this.maxID =  Math.max(this.maxID,id.id);
      this.maxID += 1;
      });            
      
    })
  }

  onCLickSignUp() {
    const fname = this.formRegister.get('firstName')?.value;
    const lname = this.formRegister.get('lastName')?.value;
    const uname = this.formRegister.get('username')?.value;
    const password1 = this.formRegister.get('password')?.value;
    const password2 = this.formRegister.get('verPassword')?.value;


    const fileInput = this.fileInput.nativeElement;
  
    if (fileInput && fileInput?.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
  
      if (this.formRegister.valid && password1 === password2) {
        this.router.navigate(['/login']);
        this.insertUserData(this.maxID ,fname, lname, uname, password1, file);
      }
    } else {
      console.log('No file selected');
    }
  }

  insertUserData(id: number ,fname: string, lname: string,  uname: string, pass: string, image: File) {
    let dataInsert: any = {
      id,
      fname,
      lname,
      pass,
      uname,
      image
    }

    this._user.insertUserDetails(dataInsert).subscribe(res => {
      console.log(res, 'Data inserted!');
    });
  }


  onfileUploadImage(event: any) {
    event.preventDefault();
    event.stopPropagation();
    const file : File = event.target.files[0];
  }


}
