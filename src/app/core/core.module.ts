import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule, IonPopover } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { KebabMenuComponent } from './kebab-menu/kebab-menu.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    KebabMenuComponent,
    AlertModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild()
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    KebabMenuComponent,
    AlertModalComponent
  ]
})
export class CoreModule { }
