import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login(formValue: {username, password}): void {
    this.authService.login(formValue.username, formValue.password);
    this.router.navigate(['/']);
  }


}
