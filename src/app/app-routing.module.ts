import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'about-film',
    loadChildren: () => import('./about-film/about-film.module').then( m => m.AboutFilmPageModule)
  },
  {
    path: 'about-lacasa',
    loadChildren: () => import('./about-lacasa/about-lacasa.module').then( m => m.AboutLacasaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})


export class AppRoutingModule {}
