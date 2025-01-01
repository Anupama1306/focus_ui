import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { KTHelpers } from 'src/app/_metronic/kt';
import { ProjectsTabComponent } from '../projects-tab.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  showLoading: boolean = false;
  searchText = new BehaviorSubject<string>('');

  constructor(private cdr: ChangeDetectorRef,private projectsTabComponent: ProjectsTabComponent) {}

  ngOnInit(): void {
    // KTHelpers.menuReinitialization()
    this.projectsTabComponent.searchCustomers("");
  }

  updateSearchText(input: string) {

    this.showLoading = true;
    this.searchText.next(input);
    this.cdr.detectChanges();
    if (input && input.length > 2) {
      // KTHelpers.menuReinitialization();
      this.projectsTabComponent.searchCustomers(input);
      // alert("Ok"+input);
    }
    setTimeout(() => {
      this.showLoading = false;
      this.cdr.detectChanges();
    }, 1300);
  }

  resetSearchText() {
    this.searchText.next('');
    this.cdr.detectChanges();
  }
}
