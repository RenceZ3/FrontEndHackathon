import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { SettingService } from '../../services/settings/setting.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private _user: UserService, private _setting: SettingService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
      
  }

  onClickLogin() {
    const uname = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    if(this.loginForm.valid) {
      this._user.getUserDetails(uname, password).subscribe(user => {
        const userList = this._setting.simplifyData(user.data);  
        const userData = userList[0];
        if(userData.role === 'user' && (userData.username === uname && userData.password === password)) {
          this.router.navigate(['/home']);
        }else if(userData.role === 'admin' && (userData.username === uname && userData.password === password)) {
          this.router.navigate(['/admin']);
        }else {
          alert("Provide a valid Credentials");
        }
        
      });
    }else {
      alert('Provide a valid Credentials');
    }
  }

  onClickRegister() {
    this.router.navigate(['/register']);
  }

}
