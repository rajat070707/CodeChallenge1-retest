import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../share/employee.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  constructor(private service: EmployeeService) {}

  departments = [
    { id: 3, value: 'dep1' },
    { id: 2, value: 'dep2' },
    { id: 1, value: 'Dep3' }
  ];

  options: string[] = ['Main', 'SVC', 'CCD', 'ROUSH', 'Pasta'];
  objectOptions = [
    { name: 'Main' },
    { name: 'SVC' },
    { name: 'CCD' },
    { name: 'ROUSH' },
    { name: 'Pasta' }
  ];

  myControl = new FormControl();

  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


displayFn(subject) {
  return subject ? subject.name : undefined;
}
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
}
