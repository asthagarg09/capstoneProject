import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list'
import { RouterModule } from '@angular/router';
import { SHeaderComponent } from './components/s-header/s-header.component';
import { SSidebarComponent } from './components/s-sidebar/s-sidebar.component';
import { SfooterComponent } from './components/sfooter/sfooter.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, SHeaderComponent, SSidebarComponent, SfooterComponent],
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
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SSidebarComponent,
    SHeaderComponent,
    SfooterComponent
  ]
})
export class SharedModule { }
