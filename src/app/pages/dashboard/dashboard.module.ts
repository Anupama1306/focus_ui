import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SearchResultInnerComponent } from 'src/app/_metronic/partials/layout/extras/dropdown-inner/search-result-inner/search-result-inner.component';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';
import { SearchComponent } from 'src/app/_metronic/layout/components/aside/tabs/projects-tab/search/search.component';
import { CustomerListComponent } from '../ticket/customer-list/customer-list.component';
import { IncidentListComponent } from '../ticket/incident-list/incident-list.component';

@NgModule({
  declarations: [DashboardComponent, ],
  imports: [
    CommonModule,
     SharedModule,
    CustomerListComponent,
    RouterModule.forChild([
        {
            path: '',
            component: DashboardComponent,
        },
        {
            path: '',
            component: SearchComponent
        },
        {
            path: '',
            component: SearchResultInnerComponent
        }
    ]),
    IncidentListComponent
],
})
export class DashboardModule {}
