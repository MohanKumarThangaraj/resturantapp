import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { OrderService } from 'src/app/services/order.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  fb = new FormBuilder();
  loginForm = this.fb.group({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  showError: any = false;
  constructor(
    private router: Router,
    private toast: ToastService,
    public storage: NativeStorage,
    private orderService: OrderService
  ) {}

  ngOnInit() {}
  async login() {
    if (this.loginForm.valid) {
      // debugger;
      const loginData = this.loginForm.getRawValue();
      const options = {
        username: loginData.username,
      };
      // this.toast.showLoader(true);
      localStorage.setItem('userdata', JSON.stringify(options));
      localStorage.setItem('login', 'true');
      this.orderService.gotohome();
      // this.toast.hideLoader();
    } else {
      // debugger;
      this.toast.showToast('Failed', 'Enter valid Login Credentials');
      this.showError = true;
    }
  }
}
