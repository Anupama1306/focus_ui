import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LmsComponent } from './lms.component';
import { ApplyleaveComponent } from './components/applyleave/applyleave.component';
import { LeavehistoryComponent } from './components/leavehistory/leavehistory.component';
import { LmscalendarComponent } from './components/lmscalendar/lmscalendar.component';
import { TimesheetComponent } from './components/timesheet/timesheet.component';

const routes: Routes = [{
  path: 'lms',
  component: LmsComponent,
   children:
    [{ path: '', redirectTo: 'lmscalendar', pathMatch: 'full' },
    { path: 'applyleave', component: ApplyleaveComponent },
    { path: 'approveleave', component: LeavehistoryComponent },
    { path: 'lmscalendar', component: LmscalendarComponent },
    { path: 'myattendance', component: TimesheetComponent },


  ],
},];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LmsRoutingModule { }
