import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from './employee.interface';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const employees: Employee[] = [
            { id: 1, name: 'John Doe', role: 'Developer', salary: 5000 },
            { id: 2, name: 'Jane Smith', role: 'Designer', salary: 4500 },
            { id: 3, name: 'Peter Parker', role: 'QA Engineer', salary: 4800 },
        ];
        return { employees };
    }
}
