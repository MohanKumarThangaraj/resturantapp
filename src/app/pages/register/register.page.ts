import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { OrderService } from 'src/app/services/order.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  fb = new FormBuilder();
  registrationForm = this.fb.group({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  });
  showError: any = false;
  constructor(
    private router: Router,
    private toast: ToastService,
    public storage: NativeStorage,
    private orderService: OrderService
  ) {}

  ngOnInit() {}
  async register() {
    if (this.registrationForm.valid) {
      // debugger;
      const registrationData = this.registrationForm.getRawValue();
      const options = {
        username: registrationData.usernme,
        email: registrationData.email,
        mobile: registrationData.mobile,
      };
      this.toast.showLoader(true);
      localStorage.setItem('login', 'true');
      localStorage.setItem('userdata', JSON.stringify(options));
      localStorage.setItem('registerData', JSON.stringify(options));
      this.orderService.gotohome();
      this.toast.hideLoader();
    } else {
      // debugger;
      this.toast.showToast('Failed', 'Enter valid Login Credentials');
      this.showError = true;
    }
  }
}
