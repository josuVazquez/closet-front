import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KebabMenuComponent } from '@core/kebab-menu/kebab-menu.component';
import { PopoverController } from '@ionic/angular';
import { Header } from './header.model';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  header: Header = new Header();
  headerSubscription: any;

  constructor(private headerService: HeaderService,
    private router: Router,
    public popoverController: PopoverController) {
    this.headerService.getHeaderData$().subscribe( data => {
      this.header = data;
    });
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: KebabMenuComponent,
      event: ev,
      translucent: true
    });
    await popover.present();
  }

  onDestroy() {
    this.headerSubscription.unSubscribe();
  }

  goHome() {
    this.router.navigate(['home']);
  }
}
