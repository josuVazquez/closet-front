import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-outfit/:id',
    loadChildren: () => import('./pages/out-fit/out-fit.module').then( m => m.OutFitPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'new-outfit',
    loadChildren: () => import('./pages/out-fit/out-fit.module').then( m => m.OutFitPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'new-item',
    loadChildren: () => import('./pages/item/item.module').then( m => m.ItemPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-item/:id',
    loadChildren: () => import('./pages/item/item.module').then( m => m.ItemPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
