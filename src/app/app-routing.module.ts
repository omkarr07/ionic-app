import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'demo2',
    loadChildren: () => import('./demo2/demo2.module').then( m => m.Demo2PageModule)
  },
  {
    path: 'societyjc',
    loadChildren: () => import('./societyjc/societyjc.module').then( m => m.SocietyjcPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'postnotices',
    loadChildren: () => import('./postnotices/postnotices.module').then( m => m.PostnoticesPageModule)
  },
  {
    path: 'complaints',
    loadChildren: () => import('./complaints/complaints.module').then( m => m.ComplaintsPageModule)
  },
  {
    path: 'transactions',
    loadChildren: () => import('./transactions/transactions.module').then( m => m.TransactionsPageModule)
  },
  {
    path: 'generatemain',
    loadChildren: () => import('./generatemain/generatemain.module').then( m => m.GeneratemainPageModule)
  },
  {
    path: 'service-list',
    loadChildren: () => import('./service-list/service-list.module').then( m => m.ServiceListPageModule)
  },
  {
    path: 'vpbill',
    loadChildren: () => import('./vpbill/vpbill.module').then( m => m.VpbillPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
