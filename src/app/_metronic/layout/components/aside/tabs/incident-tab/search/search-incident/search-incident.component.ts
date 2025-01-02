import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IncidentTabComponent } from '../../incident-tab.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-search-incident',
  // standalone: true,
  // imports: [],
  templateUrl: './search-incident.component.html',
  // styleUrl: './search-incident.component.scss'
})
// export class SearchIncidentComponent {
  export class SearchIncidentComponent implements OnInit {
    showLoading: boolean = false;
    searchText = new BehaviorSubject<string>('');

    constructor(private cdr: ChangeDetectorRef,private incidentTabComponent: IncidentTabComponent) {}

    ngOnInit(): void {
      // KTHelpers.menuReinitialization()
      this.incidentTabComponent.searchIncedent("");
    }

    updateSearchText(input: string) {

      this.showLoading = true;
      this.searchText.next(input);
      this.cdr.detectChanges();
      if (input && input.length > 2) {
        // KTHelpers.menuReinitialization();
        this.incidentTabComponent.searchIncedent(input);
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



