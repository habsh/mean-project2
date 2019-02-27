import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';
import {ILeaveHistory} from './leavehistory'
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LeaveHistoryapiService {

  constructor(private http: HttpClient) { }

  private servUrl = "http://localhost:3000/getLeaveHistoryDetails/"

 getLeaveHistory(id:string){
  return this.http.getLeaveHistory<ILeaveHistory>(this.servUrl.concat(id), httpOptions).pipe(
    catchError(this.handleError)
  );
  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
 }

 

//}



