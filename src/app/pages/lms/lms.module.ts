import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LmsRoutingModule } from './lms-routing.module';
import { ApplyleaveComponent } from './components/applyleave/applyleave.component';
import { LeavehistoryComponent } from './components/leavehistory/leavehistory.component';
import { LmscalendarComponent } from './components/lmscalendar/lmscalendar.component';
import { TimesheetComponent } from './components/timesheet/timesheet.component';
import { RouterModule } from '@angular/router';
import { routes } from 'src/app/app-routing.module';
import { LmsComponent } from './lms.component';


@NgModule({
  declarations: [
    LmsComponent,ApplyleaveComponent,LeavehistoryComponent,LmscalendarComponent,TimesheetComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    LmsRoutingModule,
    FormsModule,
    NgModule,
    ReactiveFormsModule
  ]
})
export class LmsModule { }
