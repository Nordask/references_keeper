import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PicturesComponent } from './components/pictures/pictures.component';
import { PicturesRoutingModule } from './pictures.routing';

@NgModule({
  declarations: [PicturesComponent],
  imports: [
    CommonModule,
    PicturesRoutingModule
  ]
})
export class PicturesModule { }
