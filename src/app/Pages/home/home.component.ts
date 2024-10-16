import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../../Service/crud.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CRUDService],
})
export class HomeComponent implements OnInit {
  employees: any[] = [];
  selectedEmployee: any = { id: null, name: '', role: '', salary: null };
  showToast: boolean = false;
  toastMessage: string = '';

  constructor(private employeeService: CRUDService) { }

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  addEmployee() {
    this.employeeService.addEmployee(this.selectedEmployee).subscribe(() => {
      this.loadEmployees();
      this.showToastMessage('Employee added successfully!');
      this.resetForm();
    });
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.selectedEmployee).subscribe(() => {
      this.loadEmployees();
      this.showToastMessage('Employee updated successfully!');
      this.resetForm();
    });
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.loadEmployees();
      this.showToastMessage('Employee deleted successfully!');
    });
  }

  editEmployee(employee: any) {
    this.selectedEmployee = { ...employee };
  }

  onSubmit() {
    if (this.selectedEmployee.id) {
      this.updateEmployee();
    } else {
      this.addEmployee();
    }
  }

  resetForm() {
    this.selectedEmployee = { id: null, name: '', role: '', salary: null };
  }

  trackByFn(index: number, item: any) {
    return item.id; // Use unique field, in this case, the id
  }

  showToastMessage(message: string) {
    this.toastMessage = message;
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 3000); // Hide toast after 3 seconds
  }
}
