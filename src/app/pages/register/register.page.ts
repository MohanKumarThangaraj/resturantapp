import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(private router: Router, private storage: NativeStorage) {}

  ngOnInit() {}
  register() {
    this.storage.setItem('login', 'LoggedIn');
    this.router.navigate(['/landing']);
  }
}
