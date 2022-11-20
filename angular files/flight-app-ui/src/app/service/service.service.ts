import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http
      .post('https://jsonplaceholder.typicode.com/posts', data)
      .pipe(
        map((resp) => {
          return resp;
        })
      );
  }

  searchFlightByCities(from: string, to: string): Observable<any> {
    // return this.http
    //   .get(
    //     `http://localhost:8084/flight/locations?source=${from}&destination=${to}`
    //   )
    //   .pipe(
    //     map((resp) => {
    //       return resp;
    //     })
    //   );
    return of([
      {
        flightNumber: 1209,
        airline: 'AirIndia',
        flightSource: 'Delhi',
        flightDestination: 'Mumbai',
        startDateTime: '2022-04-23T18:25:43.511+00:00',
        endDateTime: '2022-04-23T19:25:43.511+00:00',
        scheduledDays: 'Daily',
        instruments: 'Domestic',
        businessClassSeat: 40,
        nonBusinessClassSeat: 80,
        ticketFare: 5000.0,
        flightRows: 3,
        mealType: 'none',
      },
    ]);
  }

  searchFlightByNumber(flightNumber: string): Observable<any> {
    // return this.http
    //   .get(
    //     `http://localhost:8084/flight/${flightNumber}`
    //   )
    //   .pipe(
    //     map((resp) => {
    //       return resp;
    //     })
    //   );
    return of([
      {
        flightNumber: 129,
        airline: 'AirIndia',
        flightSource: 'Delhi',
        flightDestination: 'Mumbai',
        startDateTime: '2022-04-23T18:25:43.511+00:00',
        endDateTime: '2022-04-23T19:25:43.511+00:00',
        scheduledDays: 'Daily',
        instruments: 'Domestic',
        businessClassSeat: 40,
        nonBusinessClassSeat: 80,
        ticketFare: 5000.0,
        flightRows: 3,
        mealType: 'none',
      },
    ]);
  }
}
