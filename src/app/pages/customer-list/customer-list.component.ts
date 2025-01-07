import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Alert } from 'bootstrap';
import { catchError, Observable, of, tap } from 'rxjs';
import { Customer } from 'src/app/modules/auth/models/customer.model';

import { CustomerService } from 'src/app/modules/services/customer.service';
import { CommonModule } from '@angular/common';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-list.component.html',
  // styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit{
  formGroup: FormGroup;
    allCustomers: Customer[];

@ViewChild('modal') private modalComponent: ModalComponent;
  isLoading = false;
  modalConfig: ModalConfig = {
    modalTitle: 'Add Customer',
    dismissButtonLabel: 'Submit',
    closeButtonLabel: 'Cancel'
  };
      constructor(   public customerService: CustomerService ) {
      this.formGroup = new FormGroup({
        // customerId:
      customerName:new FormControl(),
        mobileNumber: new FormControl(),
        alternateNumber: new FormControl(),
        address: new FormControl(),


      })

    }

    ngOnInit(): void {
      alert("cHheck");
this.searchCustomers("");
    }
    openModal(){

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

  //     tap((res) => {
  //       console.log("Res",res);
  //       this.allCustomers= res.data;
  // }),
  //     catchError((errorMessage) => {
  //       console.log(errorMessage,"X");
  //       return of();
  //     }),
  //   ).subscribe(res =>console.log(res,"!!"));


      // .subscribe((res)=>{
          // this.getCustomerList=res;


          onSubmit()
          {

          }

}
