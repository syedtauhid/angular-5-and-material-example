import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/index';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  errorMSG: string;
  returnUrl: "/admin";

  constructor(
    private router: Router,
    private authenticationService: AuthService,
  ) { }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.email, this.model.password)
      .subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.errorMSG = error;
        this.loading = false;
      });
  }
}
