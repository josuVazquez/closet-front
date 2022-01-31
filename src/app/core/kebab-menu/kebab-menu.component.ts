import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { KebabMenuService } from './kebab-menu.service';

@Component({
  selector: 'app-kebab-menu',
  templateUrl: './kebab-menu.component.html',
  styleUrls: ['./kebab-menu.component.scss'],
})
export class KebabMenuComponent {

  constructor(public kebabService: KebabMenuService,
    private popoverController: PopoverController) { }

  itemListClick(item) {
    item.action();
    this.popoverController.dismiss();
  }
}
