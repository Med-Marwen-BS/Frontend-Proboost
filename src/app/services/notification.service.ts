import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http:HttpClient) { }

  savenotif(notif:any)
  {
    return this.http.post<any>("http://localhost:3000/notification/save",notif);
  }

  deletenotif(id:any)
  {
    return this.http.delete<any>("http://localhost:3000/notification/delete"+id);
  }

  getnotif(id:any)
  {
    return this.http.get<any>("http://localhost:3000/notification/getnotif/"+id);
  }
}
