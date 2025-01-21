import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  selectedToggle: string = '';
  mode="WFH";

  
  constructor() {}

  ngOnInit(): void {}
  onToggleClick(option: string) {
    this.selectedToggle = option;
    console.log('Selected Option:', this.selectedToggle);
    // // this.attendanceservice.addattendance(this.selectedToggle,this.mode)
    // .subscribe((res)=>{
    //   console.log('onToggleClick',res)
    //   Swal.fire({
    //     text:
    //       res.message,
    //     confirmButtonColor:'rgb(133, 187, 131)',
    //     // background: '#efc96a',
    //   });
    // })

  }
}
