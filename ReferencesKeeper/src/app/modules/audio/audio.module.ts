import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioComponent } from './components/audio/audio.component';
import { AudioRoutingModule } from './audio.routing';

@NgModule({
  declarations: [AudioComponent],
  imports: [
    CommonModule,
    AudioRoutingModule
  ]
})
export class AudioModule { }
