import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from './services/location.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Home', icon: 'home' },
    { title: 'Order History', icon: 'bag' },
    { title: 'logout', icon: 'settings' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public router: Router) {}
  ngOnInit() {
    console.log('calling location');
  }
  openPage(flag) {
    if (flag === 'Home') {
      this.router.navigate(['/landing']);
    } else if (flag === 'Order History') {
      this.router.navigate(['/orderhistory']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
