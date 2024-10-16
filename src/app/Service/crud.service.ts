import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../assets/API/employee.interface';

@Injectable({
  providedIn: 'root',
})
export class CRUDService {
  private apiUrl = '/api/employees';

  constructor(private http: HttpClient) {
    console.log('Crud service loaded');
  }

  getEmployees(): Observable<any> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  addEmployee(employee: any): Observable<any> {
    return this.http.post<Employee>(this.apiUrl, employee);
  }

  updateEmployee(employee: any): Observable<any> {
    return this.http.put<Employee>(`${this.apiUrl}/${employee.id}`, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete<Employee>(`${this.apiUrl}/${id}`);
  }
}
