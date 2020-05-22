import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Event } from './event';
import { Place } from './place';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiServer = 'http://localhost:5000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  getPlaces(): Observable<Place[]> {
    return this.httpClient.get<Place[]>(this.apiServer + '/api/places', this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  create(event: Event): Observable<Event>{
    console.log(event);
    return this.httpClient.post<Event>(this.apiServer + '/api/events/', JSON.stringify(event), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  getById(id): Observable<Event> {
    return this.httpClient.get<Event>(this.apiServer + '/api/events/' + id)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  getAll(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(this.apiServer + '/api/events')
    .pipe(
      catchError(this.errorHandler)
    );
  }

  update(id, event: Event): Observable<Event> {
    return this.httpClient.put<Event>(this.apiServer + '/api/events/' + id, JSON.stringify(event), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  delete(id){
    return this.httpClient.delete<Event>(this.apiServer + '/api/events/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  errorHandler(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }

}
