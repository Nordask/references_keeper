import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AudioComponent } from './components/audio/audio.component';

export const routes: Routes = [
  {
    path: '',
    component: AudioComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudioRoutingModule { }
