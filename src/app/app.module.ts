import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { StockDashComponent } from './stock-dash/stock-dash.component';
import { StockSentiComponent } from './stock-senti/stock-senti.component';
import { ApiserviceService } from './apiservice.service';

const routes: Routes = [
  { path: '', component: StockDashComponent, pathMatch: 'full' },
  { path: 'stockData', component: StockDashComponent },
  { path: 'sentiment/:id', component: StockSentiComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ApiserviceService],
  declarations: [AppComponent, StockDashComponent, StockSentiComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
