import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private httpClient: HttpClient
  ) { }
  //private baseUrl = 'https://room-management-server.herokuapp.com';
  //private baseUrl = 'http://localhost:9000';

  addRoom(roomModel: Object): Observable<any> {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      })
    }
    return this.httpClient.post(environment.baseUrl+`/room/add-room`, JSON.stringify(roomModel), httpOptions);
  }

  findAllRoom (): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
      })
    }
    return this.httpClient.get(environment.baseUrl+`/room/find-all-room`,httpOptions);
  }

  findAllRoomWithNullFacility():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
      })
    }
    return this.httpClient.get(environment.baseUrl+`/room/find-all-room-with-null-facility`,httpOptions);
  }

  findAllFacility():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
      })
    }
    return this.httpClient.get(environment.baseUrl+`/facility/find-all-facility`,httpOptions);
  }

  addFacility(facilityModel: Object): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      })
    }
    return this.httpClient.post(environment.baseUrl+`/facility/add-facility`, JSON.stringify(facilityModel), httpOptions);
  }
  addResident(residentModel: Object): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      })
    }
    return this.httpClient.post(environment.baseUrl+`/resident/add-resident`, JSON.stringify(residentModel), httpOptions);
  }

  findAllResident(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
      })
    }
    return this.httpClient.get(environment.baseUrl+`/resident/find-all-resident`,httpOptions);
  }

  findAllWithoutBookedRoom(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
      })
    }
    return this.httpClient.get(environment.baseUrl+`/room/find-all-without-booked-room`,httpOptions);
  }

  checkOutResident(residentId:number):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
      })
    }
    return this.httpClient.get(environment.baseUrl+`/resident/check-out-resident/` + residentId,httpOptions);
  }
}
