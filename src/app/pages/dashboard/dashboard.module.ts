import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CustomerListComponent } from '../customer-list/customer-list.component';
// import { CustomerListComponent } from "../customer-list/customer-list.component";
import { SearchComponent } from 'src/app/_metronic/kt/components';
import { SearchResultInnerComponent } from 'src/app/_metronic/partials/layout/extras/dropdown-inner/search-result-inner/search-result-inner.component';

@NgModule({
  declarations: [DashboardComponent,],
  imports: [
    CommonModule,

    CustomerListComponent,
    RouterModule.forChild([
        {
            path: '',
            component: DashboardComponent,
        },
        {
          path:'',
          component:SearchComponent
        },
        {
          path:'',
          component:SearchResultInnerComponent
        }
    ]),
    // CustomerListComponent
],
})
export class DashboardModule {}
