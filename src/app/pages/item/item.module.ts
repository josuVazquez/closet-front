import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemPageRoutingModule } from './item-routing.module';

import { ItemPage } from './item.page';
import { CoreModule } from '@core/core.module';
import { ImageCarouselModule } from '@shared/components/image-carousel/image-carousel.module';
import { ListModule } from '@shared/components/customList/list.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ItemPageRoutingModule,
    CoreModule,
    ImageCarouselModule,
    ListModule

  ],
  declarations: [ItemPage]
})
export class ItemPageModule {}
