import { Component, OnInit } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { Customer } from 'src/app/modules/auth/models/customer.model';
import { ApiResponse } from 'src/app/modules/auth/models/response.model';

import { CustomerService } from 'src/app/modules/services/customer.service';
// type Customer = {


//   customerId:string
//   customerName: string,
//   mobileNumber: string,
//   alternateNumber: string,
//   address: string,
//   createdBy: string,
//   createdDate: string,
//   status: number
// };

@Component({
  selector: 'app-projects-tab',
  templateUrl: './projects-tab.component.html',
})
export class ProjectsTabComponent implements OnInit {
  allCustomers: ReadonlyArray<Customer> = [];
  constructor(   public customerService: CustomerService) {}

  ngOnInit(): void {
console.log(this.searchCustomers(""));
    this.searchCustomers("");
  }

  searchCustomers(searchText:string){
    this.customerService.searchCustomer(searchText).pipe(
      tap((res) => {
        console.log("Res",res);
        this.allCustomers= res.data;
  }),
      catchError((errorMessage) => {
        console.log(errorMessage,"X");
        return of();
      }),
    ).subscribe(res =>console.log(res,"!!"));

  }

}
