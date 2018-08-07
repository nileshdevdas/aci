import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
const url = "http://dummy.restapiexample.com/api/v1/employees";
@Injectable()
export class EmployeeDaoService {
  http: Http;
  constructor(http: Http) {
    this.http = http;
  }
  create(emp) {
    return this.http.post(url, emp);
  }
  find(id) {
    return this.http.get(url);
  }
  findAll() {
    return this.http.get(url);
  }
  update(emp) {
    return this.http.put(url, emp);
  }
  delete(id) {
    return this.http.delete(url, id);
  }
}
