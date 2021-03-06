import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutFitPageRoutingModule } from './out-fit-routing.module';

import { OutFitPage } from './out-fit.page';
import { ListModule } from '@shared/components/customList/list.module';
import { CoreModule } from '@core/core.module';
import { ImageCarouselModule } from '@shared/components/image-carousel/image-carousel.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    OutFitPageRoutingModule,
    ListModule,
    CoreModule,
    ImageCarouselModule,
  ],
  declarations: [OutFitPage]
})
export class OutFitPageModule {}
