import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor() {}

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(0),
    hireDate: new FormControl(),
    isPermanent: new FormControl(false),
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      firstName: '',
      lastName: '',
      mobile: '',
      city: '',
      gender: '1',
      department: 0,
      hireDate: '',
      isPermanent: false,
    });
  }
}
