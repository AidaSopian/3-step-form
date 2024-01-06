import { Component, EventEmitter, Output } from '@angular/core';
import { MainFormService } from '../main-form.service';

@Component({
  selector: 'app-step-success',
  templateUrl: './step-success.component.html',
  styleUrl: './step-success.component.scss'
})
export class StepSuccessComponent {
  @Output() resetForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private _service: MainFormService,
  ) {}

  reset(): void {
    this._service.formObject.next(null);
    this.resetForm.emit(true);
  }
}
