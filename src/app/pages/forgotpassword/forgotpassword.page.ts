import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  fb = new FormBuilder();
  passSaveForm;
  showError: any = false;
  isSaveSubmitted = false;
  regularExpression = '^(?=.*d)(?=.*[a-zA-Z]).{8,25}$';
  showPassSaveFormError: boolean;
  errorMessage: any;
  showAllFields = true;
  constructor(private toast: ToastService, private router: Router) {}

  ngOnInit() {
    this.passSaveForm = this.fb.group({
      scUserID: ['', [Validators.required, Validators.pattern('[A-Za-z.]+$')]],
      newPass: [
        '',
        [Validators.required, Validators.pattern(this.regularExpression)],
      ],
      renewPass: [
        '',
        [Validators.required, Validators.pattern(this.regularExpression)],
      ],
    });
  }
  get errorControl1() {
    return this.passSaveForm.controls;
  }
  saveChangePass() {
    this.isSaveSubmitted = true;
    if (this.passSaveForm.valid) {
      this.toast.showLoader(true);
      this.toast.presentToast('Password Reseted,You can Login now');
      this.toast.hideLoader();
    } else {
      this.toast.presentToast('Kindly Fill All Fields');
    }
  }
  cancel() {
    this.router.navigate(['login']);
  }
}
