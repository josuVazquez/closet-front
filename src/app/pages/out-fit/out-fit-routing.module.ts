import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutFitPage } from './out-fit.page';

const routes: Routes = [
  {
    path: '',
    component: OutFitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutFitPageRoutingModule {}
