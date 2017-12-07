import { BrowserModule } from '@angular/platform-browser';
import { OnInit } from '@angular/core';
import { NgModule, Component } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
// import { FlexLayoutModule} from '@angular/flex-layout';
// import { MatButtonModule, MatCheckboxModule } from '@angular/material';
// import { MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { google } from '@agm/core/services/google-maps-types';
import { MatCardModule } from '@angular/material';
import { MatChipsModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal } from 'angular2-modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'tracker';

  ngOnInit() {

  }
}
