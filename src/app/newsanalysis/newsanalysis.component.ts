import { Component, Input,OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { MarketdataService } from '../service/marketdata.service';
@Component({
  selector: 'app-newsanalysis',
  templateUrl: './newsanalysis.component.html',
  styleUrls: ['./newsanalysis.component.css']
})
export class NewsanalysisComponent implements OnInit{
  @Input() Stock: any='';
  recommendationurl:any
  stocknews:any

  constructor(private market:MarketdataService){}
  ngOnInit(): void {
    this.recommendationurl=`https://widget.finnhub.io/widgets/recommendation?symbol=${this.Stock}`
    this.getStockNews(this.Stock)
  }
  getRecommendationUrl(){
    return this.recommendationurl
  }
  getStockNews(stockSymbol:string){
    this.market.getStockNews(stockSymbol).subscribe(res=>{
      this.stocknews=res
      this.stocknews=this.stocknews.slice(0,12)
      
    })
  }
}
