import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MarketComponent } from './market/market.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { NgFor, NgIf } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

import { UserportfoliosComponent } from './userportfolios/userportfolios.component';
import { ViewstocksComponent } from './viewstocks/viewstocks.component';
import { MatChipsModule } from '@angular/material/chips';

import { Chart, ChartModule } from '@syncfusion/ej2-angular-charts';
import {
  StockChartModule,
  CandleSeriesService,
  DateTimeService,
  CrosshairService,
  TooltipService,
  RangeTooltipService,
} from '@syncfusion/ej2-angular-charts';
import { ChartComponent } from './chart/chart.component';
import { OverviewComponent } from './overview/overview.component';
import { CompanyprofileComponent } from './companyprofile/companyprofile.component';
import { NewsanalysisComponent } from './newsanalysis/newsanalysis.component';
import { FinancialsComponent } from './financials/financials.component';
import { StockanalysisComponent } from './stockanalysis/stockanalysis.component';
import { SafePipeModule } from 'safe-pipe';
import { SharedPipesModule } from './SafePipeModule';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    MarketComponent,
    UserportfoliosComponent,
    ViewstocksComponent,
    ChartComponent,
    OverviewComponent,
    CompanyprofileComponent,
    NewsanalysisComponent,
    FinancialsComponent,
    StockanalysisComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatChipsModule,
    MatSnackBarModule,
    NgxChartsModule,
    ChartModule,
    StockChartModule,
    MatTabsModule,
    SharedPipesModule,
    MatFormFieldModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatListModule
  ],
  providers: [
    CandleSeriesService,
    DateTimeService,
    CrosshairService,
    TooltipService,
    RangeTooltipService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
