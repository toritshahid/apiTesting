import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { resp } from './interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private https: HttpClient) { }
  sendData(respo: resp): Observable<resp> {
    return this.https.post<resp>('https://84u9psimyd.execute-api.ap-south-1.amazonaws.com/test', respo)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  handleError(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}

