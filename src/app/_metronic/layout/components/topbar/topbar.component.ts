import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
})
export class TopbarComponent implements OnInit{
  menuItems: any[] = []; // Array to store menu items
  selectedToggle: string = '';
  mode="WFH";
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    // Subscribe to the menu observable
    this.authService.menu$.subscribe((menuData) => {
      console.log('Received menu data:', menuData); // For debugging
      this.menuItems = menuData; // Store received menu data
    });
  }
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
