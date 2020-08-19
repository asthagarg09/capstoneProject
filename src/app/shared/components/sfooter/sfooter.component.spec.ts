import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SfooterComponent } from './sfooter.component';

describe('SfooterComponent', () => {
  let component: SfooterComponent;
  let fixture: ComponentFixture<SfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
