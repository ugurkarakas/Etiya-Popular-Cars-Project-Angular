import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './components/content/content.component';
import { HotToastModule } from '@ngneat/hot-toast';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { AgGridModule } from 'ag-grid-angular';
import { ContentsStatisticComponent } from './components/contents-statistic/contents-statistic.component';
import { AtomLinkComponent } from './components/atom/atom-link/atom-link.component';
import { AtomButtonComponent } from './components/atom/atom-button/atom-button.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContentComponent,
    StatisticComponent,
    ContentsStatisticComponent,
    AtomLinkComponent,
    AtomButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HotToastModule.forRoot(),
    AgGridModule
  ],
  exports: [HeaderComponent,ContentComponent,StatisticComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
