import { Component, OnInit } from '@angular/core';
import { LoginService, UserData } from '../login.service';
import { Router } from '@angular/router';
import { User } from '../login.service';


@Component({
  selector: 'escapay-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: UserData | null = null;

  constructor(private loginService: LoginService, private router: Router,) { }
  ngOnInit(): void {
    const storedUserDetails = localStorage.getItem('userDetails');
    if (storedUserDetails) {
      this.user = JSON.parse(storedUserDetails) as UserData; // Converta para UserData
    }
  }

  changePW() {
    this.router.navigate(['changePassword']);
  }
  changeEmail() {
    this.router.navigate(['changeEmail']);
  }
  logout() {
    this.loginService.clearToken();
    this.router.navigate(['/']);
  }
}