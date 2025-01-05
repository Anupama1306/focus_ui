import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Config } from 'datatables.net';
import { catchError, of, tap } from 'rxjs';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
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
  selector: 'app-customer-tab',
  templateUrl: './customer-tab.component.html',
})
export class CustomerTabComponent implements OnInit {
  @ViewChild('modal') private modalComponent: ModalComponent;
  isLoading = false;
  modalConfig: ModalConfig = {
    modalTitle: 'Add Customer',
    dismissButtonLabel: 'Submit',
    closeButtonLabel: 'Cancel'
  };
  allCustomers: ReadonlyArray<Customer> = [];
  reloadEvent: EventEmitter<boolean> = new EventEmitter();
  constructor(   public customerService: CustomerService) {}

  ngOnInit(): void {
  
    this.searchCustomers("");
  }
  async openModal() {
    return await this.modalComponent.open();
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
  onSubmit(event: Event, myForm: NgForm) {
    this.isLoading = true;
  }

}
