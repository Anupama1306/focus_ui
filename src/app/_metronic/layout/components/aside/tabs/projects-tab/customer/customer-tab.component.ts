import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Config } from 'datatables.net';
import { catchError, of, tap } from 'rxjs';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import { Customer } from 'src/app/modules/auth/models/customer.model';
import { PageSizes } from 'src/app/modules/auth/models/paginator.model';
import { ApiResponse } from 'src/app/modules/auth/models/response.model';

import { CustomerService } from 'src/app/modules/services/customer.service';

@Component({
  selector: 'app-customer-tab',
  // standalone:true,
  templateUrl: './customer-tab.component.html',
})
export class CustomerTabComponent implements OnInit {
  pages:number=1;
  formGroup: FormGroup;
  @ViewChild('modal') private modalComponent: ModalComponent;
  isLoading = false;
  modalConfig: ModalConfig = {
    modalTitle: 'Add Customer',
    dismissButtonLabel: 'Submit',
    closeButtonLabel: 'Cancel'
  };
  allCustomers: ReadonlyArray<Customer> = [];
  reloadEvent: EventEmitter<boolean> = new EventEmitter();
  constructor(   public customerService: CustomerService) {
    this.formGroup = new FormGroup({
    customerName:new FormControl(),
      mobileNumber: new FormControl(),
      alternateNumber: new FormControl(),
      address: new FormControl(),


    })

  }

  ngOnInit(): void {

    this.searchCustomers("");
  }
  async openModal() {
    return await this.modalComponent.open();
  }

  onSubmit(){
    alert("On");
    console.log("Add Customer");
  }


  searchCustomers(searchText:string){
    this.customerService.searchCustomer(searchText,this.pages).pipe(
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
  // onSubmit(event: Event, myForm: NgForm) {
  //   this.isLoading = true;
  // }

}
