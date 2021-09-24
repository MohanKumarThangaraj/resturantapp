import { Injectable } from '@angular/core';
import {
  LoadingController,
  ModalController,
  ToastController,
} from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  isLoading = false;
  loader = null;
  constructor(
    private toast: ToastController,
    private loadingController: LoadingController,
    private modalController: ModalController
  ) {}

  showToast(head: string, message: string, time = 2000) {
    this.toast.create({
      header: head || null,
      message: message || null,
      position: 'bottom',
      duration: time,
    });
  }
  async presentToast(message) {
    const toast = await this.toast.create({
      message,
      duration: 2000,
    });
    toast.present();
  }
  async presentToastGreen(message) {
    const toast = await this.toast.create({
      message,
      color: 'success',
      duration: 3000,
    });
    toast.present();
  }
  async presentToastRed(message) {
    const toast = await this.toast.create({
      message,
      color: 'danger',
      duration: 3000,
    });
    toast.present();
  }
  async showLoader(overrideMaxTime?: boolean) {
    this.isLoading = true;
    this.loader = await this.loadingController
      .create({
        message: '',
        spinner: 'bubbles',
      })
      .then((res) => {
        res.present();
        setTimeout(() => {
          if (!overrideMaxTime) {
            res
              .dismiss()
              .then(() => console.log('4seconds max loading time reached'));
          }
        }, 3000);
        res.onDidDismiss().then(() => {
          console.log('Loading dismissed!');
        });
      });
  }

  async hideLoader(all = true) {
    try {
      if (all) {
        this.loadingController.dismiss();
        return;
      }
      let topLoader = await this.loadingController.getTop();
      while (topLoader) {
        if (!(await topLoader.dismiss())) {
          throw new Error('Could not dismiss the topmost loader. Aborting...');
        }
        topLoader = await this.loadingController.getTop();
      }
    } catch (e) {
      console.log(e);
    }
  }
}
