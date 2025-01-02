import { Component, OnInit } from '@angular/core';
import { IncidentService } from 'src/app/modules/services/incident.service';
import { catchError, of, tap } from 'rxjs';
import { Customer } from 'src/app/modules/auth/models/customer.model';

@Component({
  selector: 'app-incident-tab',
  standalone: false,
  // imports: [],
  templateUrl: './incident-tab.component.html',
  styleUrl: './incident-tab.component.scss'
})
export class IncidentTabComponent implements OnInit {
  allCustomers: ReadonlyArray<Customer> = [];
  constructor(   public incidentService: IncidentService) {}

  ngOnInit(): void {
console.log(this.searchIncedent(""));
    this.searchIncedent("");
  }

  searchIncedent(searchText:string){
    this.incidentService.searchIncident(searchText).pipe(
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
