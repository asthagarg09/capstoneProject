import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentQuizesComponent } from './student-quizes.component';

describe('StudentQuizesComponent', () => {
  let component: StudentQuizesComponent;
  let fixture: ComponentFixture<StudentQuizesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentQuizesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentQuizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
