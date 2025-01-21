import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-messenger-drawer',
  templateUrl: './messenger-drawer.component.html',
})
export class MessengerDrawerComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  onLogout(){
    this.authService.logout(); // Calls the logout method in AuthService
    console.log('User logged out');

  }
}
