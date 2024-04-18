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
  },  {
    path: 'elenco',
    loadChildren: () => import('./elenco/elenco.module').then( m => m.ElencoPageModule)
  },
  {
    path: 'cast-equalizer',
    loadChildren: () => import('./cast-equalizer/cast-equalizer.module').then( m => m.CastEqualizerPageModule)
  },
  {
    path: 'cast-one-piece',
    loadChildren: () => import('./cast-one-piece/cast-one-piece.module').then( m => m.CastOnePiecePageModule)
  },
  {
    path: 'cast-black-klansman',
    loadChildren: () => import('./cast-black-klansman/cast-black-klansman.module').then( m => m.CastBlackKlansmanPageModule)
  },
  {
    path: 'cast-rocky',
    loadChildren: () => import('./cast-rocky/cast-rocky.module').then( m => m.CastRockyPageModule)
  },
  {
    path: 'cast-the-witcher',
    loadChildren: () => import('./cast-the-witcher/cast-the-witcher.module').then( m => m.CastTheWitcherPageModule)
  },
  {
    path: 'cast-orange-black',
    loadChildren: () => import('./cast-orange-black/cast-orange-black.module').then( m => m.CastOrangeBlackPageModule)
  },
  {
    path: 'cast-the-plataform',
    loadChildren: () => import('./cast-the-plataform/cast-the-plataform.module').then( m => m.CastThePlataformPageModule)
  },
  {
    path: 'cast-la-casa',
    loadChildren: () => import('./cast-la-casa/cast-la-casa.module').then( m => m.CastLaCasaPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})


export class AppRoutingModule {}
