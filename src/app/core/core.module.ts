import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule, IonPopover } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { KebabMenuComponent } from './kebab-menu/kebab-menu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    KebabMenuComponent
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
    KebabMenuComponent
  ]
})
export class CoreModule { }
