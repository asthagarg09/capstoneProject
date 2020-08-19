import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-quizes',
  templateUrl: './student-quizes.component.html',
  styleUrls: ['./student-quizes.component.css']
})
export class StudentQuizesComponent implements OnInit {

  email: string;
  data = [];


  ngOnInit() {
    this.actRoute.paramMap.subscribe(params => {
      this.email = params.get('email');
    });
  }

  constructor(private httpClient: HttpClient, private actRoute: ActivatedRoute) {
    this.httpClient.get('http://localhost/capstoneProject/php/displayStudentQuiz.php')
      .subscribe(data => {
        this.data.push(data);
        console.log(this.data);

      },
        error => console.error(error));

  }


}
