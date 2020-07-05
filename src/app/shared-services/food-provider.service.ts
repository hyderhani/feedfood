import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodProviderService {

  constructor(private http: HttpClient) { }
  private providerItemsPath = '/product/'

  getItems(): Observable<any[]> {
    return this.http.get<any[]>(environment.ffApiBaseUrl + this.providerItemsPath);
    // getItems$.subscribe(response=>{
    //   console.log('ProviderItems Response', response);
    // })
  }
}
