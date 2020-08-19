import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../../../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-s-header',
  templateUrl: './s-header.component.html',
  styleUrls: ['./s-header.component.css']
})
export class SHeaderComponent implements OnInit {

  ngOnInit(): void {
  }

  loginbtn: boolean;
  logoutbtn: boolean;

  constructor(private dataService: ServiceService, private router: Router) {
    dataService.getLoggedInName.subscribe(name => this.changeName(name));
    if (this.dataService.isLoggedIn()) {
      console.log("loggedin");
      this.loginbtn = false;
      this.logoutbtn = true
    }
    else {
      this.loginbtn = true;
      this.logoutbtn = false
    }

  }

  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }
  logout() {
    this.dataService.deleteToken();
    const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/';
    this.router.navigate([redirect]);

  }


}
