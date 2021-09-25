import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from './services/location.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  username: any;
  email: any;
  mobile: any;
  public appPages = [
    { title: 'Home', icon: 'home' },
    { title: 'Order History', icon: 'bag' },
    { title: 'logout', icon: 'settings' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(public router: Router) {}
  ngOnInit() {
    const login = localStorage.getItem('login');
    if (login) {
      console.log(login);
      console.log(JSON.parse(login));
      let temp: any;
      temp = localStorage.getItem('userdata');
      if (temp) {
        temp = JSON.parse(temp);
        this.username = temp.username;
        this.email = temp.email;
        this.mobile = temp.mobile;
      }
      this.router.navigate(['/landing']);
    } else {
      this.router.navigate(['/login']);
    }
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
