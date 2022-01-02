import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutFitPageRoutingModule } from './out-fit-routing.module';

import { OutFitPage } from './out-fit.page';
import { ListModule } from '@shared/components/customList/list.module';
import { CoreModule } from '@core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutFitPageRoutingModule,
    ListModule,
    CoreModule
  ],
  declarations: [OutFitPage]
})
export class OutFitPageModule {}
