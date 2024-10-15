import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../../Service/crud.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],  // Make sure the necessary modules are imported
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CRUDService],
})
export class HomeComponent implements OnInit {
  employees: any[] = [];

  constructor(private employeeService: CRUDService) { }

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  addEmployee() {
    const newEmployee = { id: 4, name: 'Bruce Wayne', role: 'CEO', salary: 10000 };
    this.employeeService.addEmployee(newEmployee).subscribe(() => this.loadEmployees());
  }

  updateEmployee() {
    const updatedEmployee = { id: 1, name: 'John Doe', role: 'CTO', salary: 7000 };
    this.employeeService.updateEmployee(updatedEmployee).subscribe(() => this.loadEmployees());
  }

  deleteEmployee() {
    this.employeeService.deleteEmployee(1).subscribe(() => this.loadEmployees());
  }
}
