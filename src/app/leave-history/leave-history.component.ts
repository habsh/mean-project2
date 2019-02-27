import { Component, OnInit } from '@angular/core';
import {LeaveHistoryapiService} from '../leavehistoryapi.service'
import {ILeaveHistory} from '../leavehistory'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.css']
})
export class LeaveHistoryComponent implements OnInit {

  public LeaveId;
  employee:ILeaveHistory;

  constructor(private leavehistoryapiService: LeaveHistoryapiService,private route: ActivatedRoute) {

  }
 
 
  ngOnInit() {
    this.leaveId = parseInt(this.route.snapshot.paramMap.get('id'));
  
    this.leavehistoryapiService.getLeaveHistory(this.employeeId) .subscribe((data => {this.employee=data;console.log(this.employee)}));;
   
   
  
  }

  title: string = "My Leave Applications Section";
  

}
