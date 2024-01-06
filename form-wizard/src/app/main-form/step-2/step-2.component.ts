import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MainFormService } from '../main-form.service';
import { Subject, takeUntil } from 'rxjs';
import { UserForm } from '../interface/new-user.interface';

@Component({
  selector: 'app-step-2',
  templateUrl: './step-2.component.html',
  styleUrl: './step-2.component.scss'
})

export class Step2Component implements OnDestroy{
  @Output() updateStep: EventEmitter<boolean> = new EventEmitter<boolean>();

  secondForm: FormGroup;
  submitted: boolean;
  userFrom: UserForm;

  _takeUntill: Subject<boolean> = new Subject()

  constructor(
    private _fb: FormBuilder,
    private _service: MainFormService,
  ) {
    this.secondForm = this._fb.group({
      addressLine: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      country: [null, Validators.required]
    });

    this._service.formObject.pipe(takeUntil(this._takeUntill)).subscribe(
      value => { 
        if(value) {
          this.userFrom = value;
          this.patchForm(value);
        }
      }
    );
  }

  checkForm(v: string): void {
    this.submitted = true;

    if (v == 'back') this.updateStep.emit(false);
    else if (this.secondForm.valid) {
      this._service.formObject.next(Object.assign(this.userFrom, this.secondForm.value));
      this.updateStep.emit(true);
    }
  }

  patchForm(v: any): void {
    this.secondForm.patchValue({
      addressLine: v.addressLine,
      city: v.city,
      state: v.state,
      country: v.country
    })
  }

  ngOnDestroy(): void {
    this._takeUntill.next(true);
    this._takeUntill.complete();
  }
}
