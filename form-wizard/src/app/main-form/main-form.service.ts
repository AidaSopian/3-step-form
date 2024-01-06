import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UserForm } from './interface/new-user.interface';

@Injectable({
  providedIn: 'root'
})
export class MainFormService {

  constructor() { }

  formObject: BehaviorSubject<UserForm | null> = new BehaviorSubject<UserForm | null>(null);

}
