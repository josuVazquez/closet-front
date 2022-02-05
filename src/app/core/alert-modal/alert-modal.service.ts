/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { AlertModalComponent } from './alert-modal.component';
import { AlertModal, AlertType } from './alert-modal.model';

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {
  private _warningMesagge: BehaviorSubject<AlertModal> = new BehaviorSubject<AlertModal>(null);

  constructor(public modalController: ModalController) {}

  get warningMesagge$() {
    return this._warningMesagge.asObservable();
  }

  warning(message: string, header: string = '', buttons = []) {
    return this.sendMessage(new AlertModal({ type: 'warning', message, header, buttons}));
  }

  info(message: string, header: string = '', buttons = []) {
    return this.sendMessage(new AlertModal({ type: 'info', message, header, buttons}));
  }

  error(message: string, header: string = '', buttons = []) {
    return this.sendMessage(new AlertModal({ type: 'error', message, header, buttons}));
  }

  private async sendMessage(modal: AlertModal ) {
    this._warningMesagge.next(modal);
    const modalCreated = await this.modalController.create({
      component: AlertModalComponent,
      backdropDismiss: true,
      cssClass: 'small-modal'
    });
    return modalCreated.present();
  }


}
