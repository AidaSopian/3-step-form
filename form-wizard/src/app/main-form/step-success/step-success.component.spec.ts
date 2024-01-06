import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepSuccessComponent } from './step-success.component';

describe('StepSuccessComponent', () => {
  let component: StepSuccessComponent;
  let fixture: ComponentFixture<StepSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepSuccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
