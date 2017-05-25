import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Explore } from './explore';

@NgModule({
  declarations: [
    Explore,
  ],
  imports: [
    IonicPageModule.forChild(Explore),
  ],
  exports: [
    Explore
  ]
})
export class ExploreModule {}
