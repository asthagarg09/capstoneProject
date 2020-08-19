import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  email: string;

  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe(params => {
      this.email = params.get('email');
    });
  }

}
