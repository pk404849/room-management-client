import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private httpClient: HttpClient
  ) { }
  private baseUrl = 'http://localhost:9000';

  addRoom(roomModel: Object): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      })
    }
    return this.httpClient.post(`${this.baseUrl}/room/add-room`, JSON.stringify(roomModel), httpOptions);
  }

  findAllRoom (): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
      })
    }
    return this.httpClient.get(`${this.baseUrl}/room/find-all-room`,httpOptions);
  }

  findAllRoomWithNullFacility():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
      })
    }
    return this.httpClient.get(`${this.baseUrl}/room/find-all-room-with-null-facility`,httpOptions);
  }

  findAllFacility():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json',
      })
    }
    return this.httpClient.get(`${this.baseUrl}/facility/find-all-facility`,httpOptions);
  }
}
