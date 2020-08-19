import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private dataService: ServiceService, private router: Router) {
    this.angForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required],
      mobile: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  postdata(angForm1) {
    this.dataService.studentregistration(angForm1.value.name, angForm1.value.email, angForm1.value.password)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['student-login']);
        },

        error => {
          alert("Fields required");
        });
  }
  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }
  get name() { return this.angForm.get('name'); }

}
