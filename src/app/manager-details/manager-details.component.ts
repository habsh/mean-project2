import { Component, OnInit } from '@angular/core';
import {EmployeeapiService} from '../employeeapi.service'
import {IEmployee} from '../employee'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-manager-details',
  templateUrl: './manager-details.component.html',
  styleUrls: ['./manager-details.component.css']
})
export class ManagerDetailsComponent implements OnInit {

  public employeeId;
  employee:IEmployee;

  constructor(private employeeapiService: EmployeeapiService,private route: ActivatedRoute) {

  }
 
 
  ngOnInit() {
    this.employeeId = parseInt(this.route.snapshot.paramMap.get('id'));
  
    this.employeeapiService.getManager(this.employeeId) .subscribe((data => {this.employee=data;console.log(this.employee)}));;
   
   
  
  }

  title: string = "Manager Details Section";
  

}
