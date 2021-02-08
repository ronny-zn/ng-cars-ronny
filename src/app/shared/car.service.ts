import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private carsUrl = 'api/cars';

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getMaxCarId(): Observable<Car> {
    return this.http.get<Car[]>(this.carsUrl)
    .pipe(
      // Get max value from an array
      map(data => Math.max.apply(Math, data.map(function(o) { return o.id; }))   ),
      catchError(this.handleError)
    );
  }

  getCarById(id: number): Observable<Car> {
    const url = `${this.carsUrl}/${id}`;
    return this.http.get<Car>(url)
      .pipe(
        tap(data => console.log('getCar: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createCar(car: Car): Observable<Car> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    car.id = null;
    return this.http.post<Car>(this.carsUrl, car, { headers: headers })
      .pipe(
        tap(data => console.log('createCar: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteCar(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.carsUrl}/${id}`;
    return this.http.delete<Car>(url, { headers: headers })
      .pipe(
        tap(data => console.log('deleteCar: ' + id)),
        catchError(this.handleError)
      );
  }

  updateCar(car: Car): Observable<Car> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.carsUrl}/${car.id}`;
    return this.http.put<Car>(url, car, { headers: headers })
      .pipe(
        tap(() => console.log('updateCar: ' + car.id)),
        // Return the product on an update
        map(() => car),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
