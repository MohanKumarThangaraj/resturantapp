import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
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
    public storage: NativeStorage
  ) {}

  ngOnInit() {}
  async login() {
    if (this.loginForm.valid) {
      // debugger;
      const loginData = this.loginForm.getRawValue();
      const options = {
        orgname: loginData.org,
      };
      this.toast.showLoader(true);
      this.gotohome();
      this.toast.hideLoader();
    } else {
      // debugger;
      this.toast.showToast('Failed', 'Enter valid Login Credentials');
      this.showError = true;
    }
  }
  gotohome() {
    this.router.navigate(['/landing']);
  }
}
