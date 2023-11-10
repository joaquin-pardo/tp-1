import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { getIonPageElement } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'ardilla',
    loadChildren: () => import('./pages/ardilla/ardilla.module').then( m => m.ArdillaPageModule)
  },
  {
    path: 'auto',
    loadChildren: () => import('./pages/auto/auto.module').then( m => m.AutoPageModule)
  },
  {
    path: 'gato',
    loadChildren: () => import('./pages/gato/gato.module').then( m => m.GatoPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}


