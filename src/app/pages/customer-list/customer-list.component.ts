// import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/modules/services/customer.service';
import { CommonModule } from '@angular/common';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import * as bootstrap from 'bootstrap';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';
import { Customer } from 'src/app/modules/auth/models/customer.model';
import { SearchComponent } from 'src/app/_metronic/layout/components/aside/tabs/projects-tab/search/search.component';
// import {MatPaginator}from'@angular/material/paginator';

@Component({
  selector: 'app-customer-list',
   standalone: true,
  imports: [CommonModule, SharedModule,ReactiveFormsModule ],
  templateUrl: './customer-list.component.html',

})
export class CustomerListComponent implements OnInit {
  allCustomers: Customer[] = [];
  memberForm!: FormGroup;
  isLoading = false;
  modalConfig: ModalConfig = {
    modalTitle: 'Add Customer',
    dismissButtonLabel: 'Submit',
    closeButtonLabel: 'Cancel'
  };

  @ViewChild('modal') private modalComponent: ModalComponent;


//   @ViewChild('paginator')
// paginator!: MatPaginator;


  constructor(public customerService: CustomerService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.memberForm = this.fb.group({
      customerName: ['', Validators.required],  // customer name field
      mobileNumber: ['', Validators.required],  // mobile number field
      alternateNumber: ['', Validators.required],  // alternate number field
      address: ['', Validators.required],  // address field
    });

    this.searchCustomers('');
  }

  searchCustomers(searchText: string) {
    this.customerService.searchCustomer(searchText).subscribe(
      (res) => {
        console.log('Res', res);
        this.allCustomers = res.data;
      },
      (errorMessage) => {
        console.error('Error:', errorMessage);
      }
    );
  }



  addMember(): void {
  console.log("Welcome to Add Customer");
    if (this.memberForm.valid) {
      const newMember = this.memberForm.value;  // Get form data
      console.log('New Member:', newMember);

      // Call the addCustomer service method to send data to the API
      this.customerService.addCustomer(newMember).subscribe(
        (response) => {
          console.log('Member added successfully:', response);

          // Reset the form and close the modal
          this.memberForm.reset();
          const modalElement = document.getElementById('newMemberModal');
          const modal = bootstrap.Modal.getInstance(modalElement as Element);
          modal?.hide();
        },
        (error) => {
          console.error('Error adding member:', error);
        }
      );
    }
  }




  openModal() {
    // Logic to open modal can go here if needed
  }
}
