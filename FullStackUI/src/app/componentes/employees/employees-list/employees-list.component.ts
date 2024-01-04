import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employees.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[] = [
    {
      Id: '1c2acab1-f8d5-40ca-8d4f-d4b66fe54165',
      Name: 'Gojou Satoro',
      Email: 'Gojou@jjk.com',
      Phone: 1194162158,
      Salary: 100000,
      Department: 'Sorcer'
    },
    {
      Id: '62ec03a8-d8b3-4479-864b-d98f2c88eed1',
      Name: 'Eren Yeager',
      Email: 'Eren@snk.com',
      Phone: 1112345658,
      Salary: 50000,
      Department: 'Titan'
    },
    {
      Id: '3cb63b78-f48a-4ae5-85eb-489d53e3338e',
      Name: 'Gon freecss',
      Email: 'GonHunter@hxh.com',
      Phone: 22369874123,
      Salary: 300000,
      Department: 'Hunter'
    },
    {
      Id: 'b55f68e3-937c-42fe-92bf-679dd812db6f',
      Name: 'Monkey D. Luffy',
      Email: 'KingOFpirates@op.com',
      Phone: 1194162158,
      Salary: 100000,
      Department: 'Pirate'
    }
  ];
  constructor() { }

  ngOnInit(): void {
    this.employees.push()
  }

}
