import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { MatCardModule } from '@angular/material';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './environment';
import { GoogleMapComponent } from './map/google-map.component';
import { GeoService } from './geo.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseProvider } from 'angularfire2/database';
import { MatChipsModule } from '@angular/material';
import { ModalModule} from 'angular2-modal';
import { MatDialogModule } from '@angular/material';
import {MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatInputModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    AngularFireModule.initializeApp({
        apiKey: 'AIzaSyA4oBmptd_URAdnPDhcjzFf6NaRppJ1L6c',
        authDomain: 'my-project-1508936009827.firebaseapp.com',
        databaseURL: 'https://my-project-1508936009827.firebaseio.com',
        projectId: 'my-project-1508936009827',
        storageBucket: 'my-project-1508936009827.appspot.com',
        messagingSenderId: '520809038313'
      }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCFFiMmR7Ps03zOl8sIk8npa12jMjvQuKQ'
    })
  ],
  providers: [
    GeoService,
    AngularFireDatabase,
    AngularFireDatabaseProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
