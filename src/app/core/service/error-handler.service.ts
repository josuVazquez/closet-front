import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private alertController: AlertController) { }

  async genericError(error) {
    console.error(error);
    const header = 'Error';
    const message = 'Something whent wrong';
    const alert = await this.alertController.create({
      header,
      message,
      cssClass: 'error-alert'
    });
    alert.present();
  }
}
