import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import User from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData: User = {
    email: '',
    password: ''
  };

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  registerUser(): void {
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this._router.navigate(['/special']);
      },
      err => console.error(err)
    );
  }

}
