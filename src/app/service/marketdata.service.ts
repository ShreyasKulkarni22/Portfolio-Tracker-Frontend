import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from '../Models/Stock';

import { ChartData,HistoricalData } from '../Models/Historical';
import {Chart,ChartModule} from 'angular-highcharts'
@Injectable({
  providedIn: 'root'
})
export class MarketdataService {
  baseurl="https://financialmodelingprep.com/api/v3/"
  key="fe27eff79e144289d69c9121a0fe8677"

  finurl="https://finnhub.io/api/v1/news?category=general&token=cj4t6b9r01qq6hgdp6o0cj4t6b9r01qq6hgdp6og"
  constructor(private http:HttpClient) { }

  getMajorIndices(){
    return this.http.get(this.baseurl+"sector-performance?apikey="+this.key)
  }

  getMostGainers(){
    return this.http.get(this.baseurl+"stock_market/gainers?apikey="+this.key)
  }

  getMostLosers(){
    return this.http.get(this.baseurl+"stock_market/losers?apikey="+this.key)
  }

  getMostActives(){
    return this.http.get(this.baseurl+"stock_market/actives?apikey="+this.key)
  }

  getForexRates(){
    return this.http.get(this.baseurl+"fx?apikey="+this.key)
  }

  getStockInfo(sym:string){
    
    return this.http.get<Stock[]>(this.baseurl + `quote/${sym}?apikey=` + this.key)

    // setTimeout(() => {
    //   // console.log('data ', this.data[0]["symbol"],this.data[0]["name"],this.data[0]["price"],this.data[0]["dayLow"])
    //   // return this.data
    // }, 2000);
  }

  getHistoricalData(stockSymbol: string,duration:string) {
   
    const apiUrl = `https://financialmodelingprep.com/api/v3/historical-price-full/${stockSymbol}?timeseries=${duration}&apikey=${this.key}`;
    return this.http.get(apiUrl);
  }

  getHistoricalDataForDay(stockSymbol: string) {
   
    const apiUrl = `https://financialmodelingprep.com/api/v3/historical-chart/30min/${stockSymbol}?apikey=${this.key}`;
    return this.http.get(apiUrl);
  }

  getGeneralNews(){
    return this.http.get(this.finurl)
  }

  getCompanyProfile(stockSymbol: string){
    const apiUrl=`https://financialmodelingprep.com/api/v3/profile/${stockSymbol}?apikey=${this.key}`
    return this.http.get(apiUrl)
  }

  getLogo(stockSymbol:string){
    const apiUrl=`https://finnhub.io/api/v1/stock/profile2?symbol=${stockSymbol}&token=cj4t6b9r01qq6hgdp6o0cj4t6b9r01qq6hgdp6og`
    return this.http.get(apiUrl)
  }


  getResultsBySearch(query:string){
    return this.http.get(this.baseurl+`search?query=${query}&limit=10exchange=NASDAQ&apikey=${this.key}`)
  }
}
