// import { MatPaginator } from '@angular/material/paginator';
import { ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation,  } from '@angular/core';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/modules/services/customer.service';
import { CommonModule } from '@angular/common';
import { ModalComponent, ModalConfig } from 'src/app/_metronic/partials';
import * as bootstrap from 'bootstrap';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';
import { Customer } from 'src/app/modules/auth/models/customer.model';
import { SearchComponent } from 'src/app/_metronic/layout/components/aside/tabs/projects-tab/search/search.component';
//  import {MatPaginator}from'@angular/material/paginator';
 import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-customer-list',
   standalone: true,
   encapsulation: ViewEncapsulation.None,  
  imports: [CommonModule, SharedModule,  ReactiveFormsModule ,MatPaginatorModule],
  
  templateUrl: './customer-list.component.html',
 
})
export class CustomerListComponent implements OnInit {
 
  allCustomers: Customer[] = [];
  displayedCustomers: Customer[] = []; 
  allCustomersPagination:any;
  // perPage: number ;
  memberForm!: FormGroup;
  isLoading = false;
  public paginationData = new MatTableDataSource<any>();
  dataObs$!: Observable<any>;
 
  perPage: number = 0; // Number of items per page from the API
  currentPage: number = 0; // Current page from the API
  totalRows: number = 0; // Total number of rows from the API
  totalPages: number = 0; // Calculated total pages
  page: number = 1; // Array of page numbers
  pages:number[]=[];
  
  modalConfig: ModalConfig = {
    modalTitle: 'Add Customer',
    dismissButtonLabel: 'Submit',
    closeButtonLabel: 'Cancel'
  };

  @ViewChild('modal') private modalComponent: ModalComponent;


//   @ViewChild('paginator')
// paginator!: MatPaginator;


  constructor(public customerService: CustomerService, private fb: FormBuilder,
    private _changeDetectorRef: ChangeDetectorRef,
  ) {}

  @ViewChild('paginator')
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.paginationData.paginator = this.paginator;
 }

  ngOnInit(): void {
    this.memberForm = this.fb.group({
      // customerName: ['', Validators.required],  // customer name field
      // mobileNumber: ['', Validators.required],  // mobile number field
      // alternateNumber: ['', Validators.required],  // alternate number field
      // address: ['', Validators.required],  // address field
      customerName: ['', [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z .-]+$') // Only letters, spaces, periods, and hyphens
      ]],
      mobileNumber: ['', [
        Validators.required,
        Validators.maxLength(15),
        Validators.pattern('^[0-9]+$') // Only digits (0-9)
      ]],
      alternateNumber: ['', [
        Validators.required,
        Validators.maxLength(15),
        Validators.pattern('^[0-9]+$') // Only digits (0-9)
      ]],
      address: ['', [
        Validators.required,
        Validators.maxLength(500),
        Validators.pattern('^[a-zA-Z0-9 .,/-]+$') // Allow spaces, slashes, dashes, numbers, and letters
      ]]
    });

    this.searchCustomers('',this.page);    
    this.setPagination( this.allCustomers);
  }


  searchCustomers(searchText: string, page: number) {
    this.customerService.searchCustomer(searchText, page).subscribe(
      (res) => {
        console.log('Res:', res);
        
        // Update pagination state
        this.totalRows = res.totalRows;  // Total records available
        this.perPage = res.perPage;  // Records per page
        this.currentPage = res.page;  // Current page number
  
        // Calculate total pages
        this.totalPages = Math.ceil(this.totalRows / this.perPage);
  
        // Update the list of customers for the current page
        this.allCustomers = res.data;        
        this.paginationData.data = this.allCustomers;
  
        // Recalculate page numbers dynamically
        this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  
        console.log('Pagination Info:', {
          perPage: this.perPage,
          currentPage: this.currentPage,
          totalRows: this.totalRows,
          totalPages: this.totalPages,
          pages: this.pages,
        });
      },
      (errorMessage) => {
        console.error('Error:', errorMessage);
      }
    );
  }


  changePage(page: number) {
    if (page < 1 || page > this.totalPages) return; // Ensure valid page
    this.currentPage = page; // Update current page before requesting new data
    console.log('Navigating to page:', page);    
    this.searchCustomers('', this.currentPage);  // Fetch data for the current page  
    // this._changeDetectorRef.detectChanges();  // Ensure view updates properly
   
  }
// Go to the previous page
prevPage() {
  if (this.currentPage > 1) {
    this.changePage(this.currentPage - 1);
  }
}

// Go to the next page
nextPage() {
  if (this.currentPage < this.totalPages) {
    this.changePage(this.currentPage + 1);
  }
}

getMinValue(): number {
  return Math.min(this.currentPage * this.perPage, this.totalRows);
}

setPagination(data: any) {
  this.paginationData = new MatTableDataSource<any>(data);
  // this._changeDetectorRef.detectChanges();
  this.paginationData.paginator = this.paginator;
  this.dataObs$ = this.paginationData.connect();
}


// addMember to BE
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




  
}
