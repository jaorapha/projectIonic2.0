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
  },
  {
    path: 'about-the-plataform',
    loadChildren: () => import('./about-the-plataform/about-the-plataform.module').then( m => m.AboutThePlataformPageModule)
  },
  {
    path: 'about-the-witcher',
    loadChildren: () => import('./about-the-witcher/about-the-witcher.module').then( m => m.AboutTheWitcherPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'my-list',
    loadChildren: () => import('./my-list/my-list.module').then( m => m.MyListPageModule)
  },
  {
    path: 'about-equalizer',
    loadChildren: () => import('./about-equalizer/about-equalizer.module').then( m => m.AboutEqualizerPageModule)
  },
  {
    path: 'about-black-klansman',
    loadChildren: () => import('./about-black-klansman/about-black-klansman.module').then( m => m.AboutBlackKlansmanPageModule)
  },
  {
    path: 'about-rocky',
    loadChildren: () => import('./about-rocky/about-rocky.module').then( m => m.AboutRockyPageModule)
  },
  {
    path: 'page-user',
    loadChildren: () => import('./page-user/page-user.module').then( m => m.PageUserPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})


export class AppRoutingModule {}
