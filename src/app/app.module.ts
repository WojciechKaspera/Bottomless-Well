import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {DataProviderService} from './data-provider.service';

const routes: Routes = [
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
  { path: 'modify', loadChildren: './modify-item/modify-item.module#ModifyItemModule'},
  { path: '**', redirectTo: 'dashboard'},
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  providers: [
    DataProviderService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
