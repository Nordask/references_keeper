import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatSidenavModule, MatListModule, MatToolbarModule, MatIconModule,
         MatSlideToggleModule, MatSliderModule} from "@angular/material";

import { ArticlesModule } from '@modules/articles/articles.module';
import { VideoModule } from '@modules/video/video.module';
import { AudioModule } from '@modules/audio/audio.module';
import { PicturesModule } from '@modules/pictures/pictures.module';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSliderModule,
    ArticlesModule,
    VideoModule,
    AudioModule,
    PicturesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
