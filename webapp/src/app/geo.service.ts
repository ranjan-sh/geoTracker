import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as GeoFire from 'geofire';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class GeoService {
  dbRef: any;
  geoFire: any;
  hits = new BehaviorSubject([]);
  constructor(private db: AngularFireDatabase) {
    /// Reference database location for GeoFire
    this.dbRef = this.db.database.ref('/user');
    this.geoFire = new GeoFire(this.dbRef);
   }

   /// Adds GeoFire data to database
   setLocation(key: string, coords: Array<number>) {
     this.geoFire.set(key, coords)
         .then(_ => console.log('location updated'))
         .catch(err => console.log(err));
   }


   /// Queries database for nearby locations
   /// Maps results to the hits BehaviorSubject
   getLocations(radius: number, coords: Array<number>) {

    // this.geoFire.get('some_key').then(function(location) {
    //   if (location === null) {
    //     console.log('Provided key is not in GeoFire');
    //   } else {
    //     console.log('Provided key has a location of ' + location);
    //   }
    // }, function(error) {
    //   console.log('Error: ' + error);
    // });

    this.geoFire.query({
      center: coords,
      radius: radius
    })
    .on('key_entered', (key, location, distance) => {
      console.log(key);
      const hit = {
        location: location,
        distance: distance
      };
      if (distance > 5) {
        // alert('Warning: Student out of safe zone');
        distance = 1;
      }
      console.log(key + ' ' + location + ' ' + distance);
      const currentHits = this.hits.value;
      currentHits.push(hit);
      this.hits.next(currentHits);
    });
   }
}
