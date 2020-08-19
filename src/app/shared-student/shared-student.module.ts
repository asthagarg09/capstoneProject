import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentFooterComponent } from './student-footer/student-footer.component';
import { StudentHeaderComponent } from './student-header/student-header.component';
import { StudentSidebarComponent } from './student-sidebar/student-sidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list'
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [StudentHeaderComponent, StudentFooterComponent, StudentSidebarComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule
  ],
  exports: [
    StudentHeaderComponent,
    StudentFooterComponent,
    StudentSidebarComponent
  ]
})
export class SharedStudentModule { }