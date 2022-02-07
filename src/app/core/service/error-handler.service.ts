import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

export interface CustomError {
  header: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private alertController: AlertController) { }

  async genericError(error: Partial<CustomError> = {}) {
    console.error(error);
    const header = error.header || 'Error';
    const message = error.header || 'Something whent wrong';
    const alert = await this.alertController.create({
      header,
      message,
      cssClass: 'error-alert'
    });
    alert.present();
  }
}
