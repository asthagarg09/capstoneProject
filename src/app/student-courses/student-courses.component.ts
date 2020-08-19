import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-courses.component.css']
})
export class StudentCoursesComponent {
  data = [];
  data1 = [];
  public angForm1: FormGroup = new FormGroup({
    cname: new FormControl(''),
    cemail: new FormControl('')
  });

  email: string;


  /*ngOnInit() {
    this.actRoute.paramMap.subscribe(params => {
      this.email = params.get('email');
      this.angForm.controls['cemail'].setValue(this.email);
    });
  }*/
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private dataService: ServiceService, private router: Router, private httpClient: HttpClient, private actRoute: ActivatedRoute) {
    this.angForm = this.fb.group({
      cname: ['', Validators.required],
      cemail: ['', Validators.required]
    }
    );
    this.actRoute.paramMap.subscribe(params => {
      this.email = params.get('email');
      this.angForm.controls['cemail'].setValue(this.email);
      const params1 = new HttpParams().set('email', this.email);

      this.httpClient.get("http://localhost/capstoneProject/php/displayRegisteredCourses.php", { params: params1 })
        .subscribe(data1 => {
          this.data1.push(data1);
          console.log(this.data1);

        },
          error => console.error(error));

    });

    this.httpClient.get('http://localhost/capstoneProject/php/displayStudentCourse.php')
      .subscribe(data => {
        this.data.push(data);
        console.log(this.data);

      },
        error => console.error(error));

    /*this.httpClient.post("http://localhost/capstoneProject/php/displayRegisteredCourses.php", {
      params: { cemail:this.data1.email }
    });*/



  }



  postdata(angForm) {
    this.dataService.courseregistration(angForm.value.cname, angForm.value.cemail)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['student-courses/' + angForm.value.cemail]);
          console.log(angForm.value.cname);

        },

        error => {
        });
  }

  get cname() { return this.angForm.get('cname'); }


}
