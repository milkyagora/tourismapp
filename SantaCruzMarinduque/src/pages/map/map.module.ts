import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Map } from './map';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, CameraPosition, MarkerOptions, Marker} from '@ionic-native/google-maps';

@NgModule({
  declarations: [
    Map,
  ],
  imports: [
    IonicPageModule.forChild(Map),
  ],
  exports: [
    Map
  ],
  providers: [
  GoogleMaps
]
})
export class MapModule {}
