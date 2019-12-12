import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_ROUTING_ENUM } from './app-routing.enum';
import { APP_ROUTING_TITLE_ENUM } from './app-routing-title.enum';
const routes: Routes = [
  {
    path: APP_ROUTING_ENUM.ARTICLES,
    data: { title: APP_ROUTING_TITLE_ENUM.ARTICLES },
    loadChildren: '@modules/articles/articles.module#ArticlesModule'
  },
  {
    path: APP_ROUTING_ENUM.AUDIO,
    data: { title: APP_ROUTING_TITLE_ENUM.AUDIO },
    loadChildren: '@modules/audio/audio.module#AudioModule'
  },
  {
    path: APP_ROUTING_ENUM.PICTURES,
    data: { title: APP_ROUTING_TITLE_ENUM.PICTURES },
    loadChildren: '@modules/pictures/pictures.module#PicturesModule'
  },
  {
    path: APP_ROUTING_ENUM.VIDEO,
    data: { title: APP_ROUTING_TITLE_ENUM.VIDEO },
    loadChildren: '@modules/video/video.module#VideoModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
