import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent {


  email: string;

  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe(params => {
      this.email = params.get('email');
    });
  }

  /*data=[]; 
  constructor(private httpClient:  HttpClient)  { 
    this.httpClient.get('http://localhost/capstoneProject/php/login_student.php')
    .subscribe(data => {
      this.data.push(data);
      console.log(this.data);
    },
    error => console.error(error));
 }*/
}
