import { Component, OnInit } from '@angular/core';
import { AlertModal } from './alert-modal.model';
import { AlertModalService } from './alert-modal.service';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss'],
})
export class AlertModalComponent {

  constructor(public alertService: AlertModalService) { }

}
