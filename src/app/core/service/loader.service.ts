import { Injectable } from '@angular/core';
import { LoadingController, Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loadin = [];

  constructor(public loadingController: LoadingController, public plt: Platform) {
  }

  async showLoader() {
    const loading = await this.loadingController.create({});
    await loading.present();
    this.loadin.push(loading);
  }

  // Hide the loader if already created otherwise return error
  hideLoader() {
    if(this.loadin.length) {
      this.loadin[0].dismiss();
      this.loadin.splice(0, 1);
    }
  }
}
