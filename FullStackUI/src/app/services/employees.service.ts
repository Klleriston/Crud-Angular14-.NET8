import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';  
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employees.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  baseApiUrl:string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}
  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseApiUrl}/api/employees`)
  }
  addEmployee(addEmployeeRequest: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.baseApiUrl}/api/employees`, addEmployeeRequest)
  }
  getEmployee(id:string): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseApiUrl}/api/employees/${id}`);
  }
  updateEmployee(id:string, updateEmployeeRequest: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.baseApiUrl}/api/employees/${id}`, updateEmployeeRequest);
  }
  deleteEmployee(id:string): Observable<Employee> {
    return this.http.delete<Employee>(`${this.baseApiUrl}/api/employees/${id}`)
  }
}
