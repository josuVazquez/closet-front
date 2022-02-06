import { Injectable } from '@angular/core';
import { LoadingController, Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(public loadingController: LoadingController, public plt: Platform) {
  }

  showLoader() {
    this.loadingController.create({
    }).then((res) => {
      res.present();
    });

  }

  // Hide the loader if already created otherwise return error
  hideLoader() {
    this.loadingController.dismiss();
  }
}
