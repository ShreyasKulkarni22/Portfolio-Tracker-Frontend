import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MarketComponent } from './market/market.component';
import { UserportfoliosComponent } from './userportfolios/userportfolios.component';
import { ViewstocksComponent } from './viewstocks/viewstocks.component';
import { AuthGuard } from './guards/auth.guard';
import { ChartComponent } from './chart/chart.component';
import { CompanyprofileComponent } from './companyprofile/companyprofile.component';
import { OverviewComponent } from './overview/overview.component';
import { NewsanalysisComponent } from './newsanalysis/newsanalysis.component';
import { FinancialsComponent } from './financials/financials.component';
import { StockanalysisComponent } from './stockanalysis/stockanalysis.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'market', component: MarketComponent /*,canActivate:[AuthGuard]*/ },
  {
    path: 'portfolios',
    component: UserportfoliosComponent /*,canActivate:[AuthGuard]*/,
  },
  {
    path: 'viewstocks/:id',
    component: ViewstocksComponent /*,canActivate:[AuthGuard]*/,
  },
  {
    path: 'chart',
    component: ChartComponent,
    children: [
      // { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent },
      { path: 'profile', component: CompanyprofileComponent },
      { path: 'newsanalysis', component: NewsanalysisComponent },
      { path: 'financials', component: FinancialsComponent },
    ],
  },
  {
    path: 'stockanalysis',
    component: StockanalysisComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
