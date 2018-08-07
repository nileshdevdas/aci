import { Component, OnInit } from '@angular/core';
import { EmployeeDaoService } from '../employee-dao.service';
@Component({
  selector: 'app-apidemo',
  templateUrl: './apidemo.component.html',
  styleUrls: ['./apidemo.component.css']
})
export class ApidemoComponent {
  employeeDAOService: EmployeeDaoService;
  employees: any;
  errors: any;
  constructor(employeeDAOService: EmployeeDaoService) {
    this.employeeDAOService = employeeDAOService;
  }
  fetchEmployees() {
    this.employeeDAOService.findAll().toPromise().then((result) => {
      this.employees = result.json();
    }).catch((errors) => {
      this.errors = errors;
    }
    );
  }
}
