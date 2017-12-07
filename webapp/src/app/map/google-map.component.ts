import { Component, OnInit, OnDestroy, AfterContentChecked, OnChanges, ViewChild } from '@angular/core';
import { GeoService } from '../geo.service';
import { MatCardModule } from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material';
import {MatInputModule} from '@angular/material';
import * as $ from 'jquery';

@Component({
  selector: 'google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit, AfterContentChecked {
  lat: number;
  lng: number;
  markers: any;
  subscription: any;
  distance: number;
  constructor(private geo: GeoService
          ) { }

  private seedDatabase() {
    const dummyPoints = [
      [17.43100, 78.4200],
      [17.43200, 78.4100],
      [17.41200, 78.4500],
      [17.41500, 78.4700],
      [18.44500, 77.4600]
    ];
    dummyPoints.forEach((val, idx) => {
      const name = `location-${idx}`;
      // console.log(idx);
      this.geo.setLocation(name, val);
    });
  }

  ngOnInit() {
    
  }

  ngAfterContentChecked() {
      this.seedDatabase();
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        });
      }
      this.getUserLocation();
      this.subscription = this.geo.hits
          .subscribe(hits => {
            // console.log(hits);
            this.markers = hits;
          });
  }


  private getUserLocation() {
    /// locate the user
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        console.log(this.lat + ' ' + this.lng);
        this.geo.getLocations(1000000, [this.lat, this.lng]);
      });
    }
  }
}
