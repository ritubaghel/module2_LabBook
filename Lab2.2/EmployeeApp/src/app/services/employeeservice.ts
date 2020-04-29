import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable()
export class EmployeeService{

 store=[
  
   new Employee(1,'Ritu',20000,"Angular"),
   new Employee(5,'Shreya',20000,"Java"),
   new Employee(3,'Vibhor',20000,"Angular"),
   new Employee(4,'Shubham',20000,"Java")
];   
 
 

  fetchAllEmployees(): Employee[]{
      return this.store;
  }


}