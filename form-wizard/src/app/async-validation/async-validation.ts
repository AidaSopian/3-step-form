import { AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime, map, catchError, switchMap } from 'rxjs/operators';
import { FakeApiService } from './fake-api.service';

export function uniqueValidator(apiService: FakeApiService): AsyncValidatorFn {
  return (control: AbstractControl):
  | Promise<ValidationErrors | null>
  | Observable<ValidationErrors | null> => {
    return of(control.value).pipe(
      debounceTime(300), 
      switchMap(checkString => apiService.checkUsernameAvailability(checkString)), // <-- here will call api to check
      map(isAvailable => (isAvailable ? null : { notUnique: true })),
      catchError(async () => null) 
    );
  };
}