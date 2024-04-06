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
  },
  {
    path: 'about-orange-black',
    loadChildren: () => import('./about-orange-black/about-orange-black.module').then( m => m.AboutOrangeBlackPageModule)
  },
  {
    path: 'about-one-piece',
    loadChildren: () => import('./about-one-piece/about-one-piece.module').then( m => m.AboutOnePiecePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})


export class AppRoutingModule {}
