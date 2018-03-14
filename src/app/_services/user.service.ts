import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Employee } from '../_models/index';

@Injectable()
export class EmployeeService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Employee[]>('/api/Employees');
    }

    getById(id: number) {
        return this.http.get('/api/Employees/' + id);
    }

    create(Employee: Employee) {
        return this.http.post('/api/Employees', Employee);
    }

    update(Employee: Employee) {
        return this.http.put('/api/Employees/' + Employee.id, Employee);
    }

    delete(id: number) {
        return this.http.delete('/api/Employees/' + id);
    }
}