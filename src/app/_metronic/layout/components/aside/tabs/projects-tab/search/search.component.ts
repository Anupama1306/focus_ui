import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { KTHelpers } from 'src/app/_metronic/kt';
import { ProjectsTabComponent } from '../projects-tab.component';
import { CustomerTabComponent } from '../customer/customer-tab.component';
import { InlineSVGModule } from 'ng-inline-svg-2/lib_commonjs/inline-svg.module';

@Component({
  selector: 'app-search',
  // standalone: true,
  // imports: [InlineSVGModule, /* other imports */],
  templateUrl: './search.component.html',
  
})
export class SearchComponent implements OnInit {
  showLoading: boolean = false;
  searchText = new BehaviorSubject<string>('');  // Your BehaviorSubject

  constructor(private cdr: ChangeDetectorRef,private customerTabComponent: CustomerTabComponent) {}

  ngOnInit(): void {
    // KTHelpers.menuReinitialization()
    this.customerTabComponent.searchCustomers("");
  }

  // updateSearchText(input: string) {

  //   this.showLoading = true;
  //   this.searchText.next(input);
  //   this.cdr.detectChanges();
  //   if (input && input.length > 2) {
  //     // KTHelpers.menuReinitialization();
  //     this.customerTabComponent.searchCustomers(input);
  //     // alert("Ok"+input);
  //   }
  //   setTimeout(() => {
  //     this.showLoading = false;
  //     this.cdr.detectChanges();
  //   }, 1300);
  // }
  updateSearchText(input: string) {
    this.showLoading = true;
    this.searchText.next(input);  // Update the BehaviorSubject with the new input
    this.cdr.detectChanges();     // Detect changes manually
    
    if (input && input.length > 2) {
      this.customerTabComponent.searchCustomers(input);  // Call search function if input is long enough
    }
  
    setTimeout(() => {
      this.showLoading = false;  // Hide loading after a delay
      this.cdr.detectChanges();
    }, 1300);
  }
  resetSearchText() {
    this.searchText.next('');
    this.cdr.detectChanges();
  }
}
