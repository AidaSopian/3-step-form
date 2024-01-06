import { Component, EventEmitter, Output } from '@angular/core';
import { MainFormService } from '../main-form.service';
import { UserForm } from '../interface/new-user.interface';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-step-3',
  templateUrl: './step-3.component.html',
  styleUrl: './step-3.component.scss'
})
export class Step3Component {
  @Output() confirmSummary: EventEmitter<boolean> = new EventEmitter<boolean>();

  userInfo: UserForm;
  _takeUntill: Subject<boolean> = new Subject()
  
  constructor(
    private _service: MainFormService,
  ) { 

    this._service.formObject.pipe(takeUntil(this._takeUntill)).subscribe(
      value => { 
        if(value) this.userInfo = value;
      }
    );
  }

  confirm(v: string): void {
    if(v == 'confirm') this.confirmSummary.emit(true);
    else this.confirmSummary.emit(false);
  }
}
