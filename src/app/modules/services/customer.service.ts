import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'http://localhost:9200/stashook/searchCustomer';

  constructor(private http: HttpClient) {}

  searchCustomer(search: string = ''): Observable<any[]> {
      return this.http.post<any[]>(`${this.apiUrl}?search=${search}`,"page");
  }

}
