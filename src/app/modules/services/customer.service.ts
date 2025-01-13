import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { AuthModel } from '../auth/models/auth.model';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../auth/models/response.model';
import { Customer } from '../auth/models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private _errorMsg: any;

  private apiUrl = 'http://localhost:9201/stashook/searchCustomer';
  private apiaddCustomer = 'http://localhost:9201/stashook/addCustomer';

  // private GetCustomerListUrl = 'http://localhost:9200/stashook/getCustomerList';
  private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;
  constructor(private http: HttpClient) {}

  searchCustomer(search: string = ''): Observable<ApiResponse> {
    var auth = this.getAuthFromLocalStorage();
       const httpHeaders = new HttpHeaders({
      Authorization: `${auth?auth.authToken:""}`,
    });
      // return this.http.post<any[]>(`${this.apiUrl}?search=${search}`,"page",{
        return this.http.post<ApiResponse>(`${this.apiUrl}?`,{"searchTerm":search,    "page":1,
          "perPage":15,
          "sort": "createdDate desc"},{

        headers: httpHeaders,
      });
  }

  addCustomer(ApiResponse: any): Observable<any> {
    console.log("ApiResponse",ApiResponse);
    const auth = this.getAuthFromLocalStorage(); // Get token from localStorage
    const authToken = auth ? auth.authToken : '';
  
    if (!authToken) {
      console.error('No authentication token found!');
      return of({ error: 'No token provided' }); // Or some error handling here
    }
  
    const httpHeaders = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    });
  
    return this.http.post(`${this.apiaddCustomer}`, ApiResponse, { headers: httpHeaders }).pipe(
      catchError(err => {
        console.error('Error:', err);
        return of({ error: 'API request failed' });
      })
    );
  }

private getAuthFromLocalStorage(): AuthModel | undefined {
  try {
    const lsValue = localStorage.getItem(this.authLocalStorageToken);
    if (!lsValue) {
      return undefined;
    }

    const authData = JSON.parse(lsValue);
    return authData;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
}
