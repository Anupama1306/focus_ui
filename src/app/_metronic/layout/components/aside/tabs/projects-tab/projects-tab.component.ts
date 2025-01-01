import { Component, OnInit } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { CustomerService } from 'src/app/modules/services/customer.service';

type Customer = {
  image: string;
  title: string;
  link: string;
};

@Component({
  selector: 'app-projects-tab',
  templateUrl: './projects-tab.component.html',
})
export class ProjectsTabComponent implements OnInit {
  allCustomers: ReadonlyArray<Customer> = [];
  constructor(   public customerService: CustomerService) {}

  ngOnInit(): void {
    
    this.searchCustomers();
  }

  searchCustomers(){
    this.customerService.searchCustomer().pipe(
      tap((res) => {
        this.allCustomers= res;
  }),
      catchError((errorMessage) => {
        console.log(errorMessage,"X");
        return of();
      }),
    ).subscribe(res =>console.log(res,"!!"));

  }

}
