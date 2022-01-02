import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'edit-outfit/:id',
    loadChildren: () => import('./pages/out-fit/out-fit.module').then( m => m.OutFitPageModule)
  },
  {
    path: 'new-outfit',
    loadChildren: () => import('./pages/out-fit/out-fit.module').then( m => m.OutFitPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
