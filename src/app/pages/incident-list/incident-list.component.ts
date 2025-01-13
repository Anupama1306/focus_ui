import { IncidentService } from './../../modules/services/incident.service';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from "../../_metronic/shared/shared.module";
import { Incident } from 'src/app/modules/auth/models/incident.model';
import { CommonModule } from '@angular/common';
import { catchError, of, tap } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-incident-list',
  standalone: true,
  imports: [SharedModule,CommonModule],
  templateUrl: './incident-list.component.html',
  styleUrl: './incident-list.component.scss'
})
export class IncidentListComponent implements OnInit{
  formGroup: FormGroup;
    allCustomers: Incident[];
      constructor(   public incidentService:IncidentService) {
 this.formGroup = new FormGroup({
        // customerId:
        cookBookName:new FormControl(),
        categoryName: new FormControl(),
        mobileNumber: new FormControl(),
        priority: new FormControl(),


      })
    }
      allIncident: Incident[];

      ngOnInit():void{
        this.searchIncedent("");
      }

        searchIncedent(searchText:string){
          this.incidentService.searchIncident(searchText).pipe(
            tap((res) => {
              console.log("ResIncident Data",res);
              this.allIncident= res.data;
        }),
            catchError((errorMessage) => {
              console.log(errorMessage,"X");
              return of();
            }),
          ).subscribe(res =>console.log(res,"!!"));

        }
      }
