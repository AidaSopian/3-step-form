import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainFormService } from '../main-form.service';
import { Subject, takeUntil } from 'rxjs';
import { UserForm } from '../interface/new-user.interface';

@Component({
  selector: 'app-step-1',
  templateUrl: './step-1.component.html',
  styleUrl: './step-1.component.scss'
})

export class Step1Component implements OnDestroy {
  @Output() goNext: EventEmitter<boolean> = new EventEmitter<boolean>();

  firstForm: FormGroup;
  submitted: boolean;
  userFrom: UserForm;

  _takeUntill: Subject<boolean> = new Subject()

  constructor(
    private _fb: FormBuilder,
    private _service: MainFormService,
  ) { 
    this.firstForm = this._fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, Validators.nullValidator]
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

  checkForm(): void {
    this.submitted = true;

    if(this.firstForm.valid) {
      if(this.userFrom) this._service.formObject.next(Object.assign(this.userFrom, this.firstForm.value));
      else this._service.formObject.next(Object.assign(this.firstForm.value));
      this.goNext.emit(true);
    }
  }

  patchForm(v: UserForm): void {
    this.firstForm.patchValue({
      name: v.name,
      email: v.email,
      phone: v.phone
    })
  }

  ngOnDestroy(): void {
    this._takeUntill.next(true);
    this._takeUntill.complete();
  }
}
