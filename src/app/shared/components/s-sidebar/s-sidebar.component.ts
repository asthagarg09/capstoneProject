import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-s-sidebar',
  templateUrl: './s-sidebar.component.html',
  styleUrls: ['./s-sidebar.component.css']
})
export class SSidebarComponent {

  email: string;

  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe(params => {
      this.email = params.get('email');
    });
  }

}
