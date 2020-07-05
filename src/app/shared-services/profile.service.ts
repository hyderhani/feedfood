import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) { }
  private userItemsPath = '/mockData/providerUsers.json'

  getUserId() {
    return 123;

  }

  getItems(userId): Observable<any[]> {
    return this.http.get<any[]>(environment.ffApiBaseUrl + this.userItemsPath);
  }
}
