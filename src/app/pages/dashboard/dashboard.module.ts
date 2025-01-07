import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CustomerListComponent } from '../customer-list/customer-list.component';
// import { CustomerListComponent } from "../customer-list/customer-list.component";


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    CustomerListComponent,
    RouterModule.forChild([
        {
            path: '',
            component: DashboardComponent,
        },
    ]),
    // CustomerListComponent
],
})
export class DashboardModule {}
