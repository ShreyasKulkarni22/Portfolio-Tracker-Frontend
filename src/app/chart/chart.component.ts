import { MarketdataService } from '../service/marketdata.service';
import { MatTabsModule } from '@angular/material/tabs';
import { SafePipeModule } from 'safe-pipe/public-api';
import {
  Component,
  ElementRef,
  Input,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  //query
  @Input() Stock: any='';

  @ViewChild('chartCanvas') chartCanvas!: ElementRef;
  chart: Chart | undefined;
  responseData: any;
  chartData: any;

  finurl:any

  flag:string='line'
  companyquote: any;
  companyprof: any;
  recommendationurl: any;
  constructor(
    private market: MarketdataService,
    private elementRef: ElementRef,
    private ngZone: NgZone,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    // this.route.queryParams.subscribe((res) => {
    //   this.Stock = res['name'];
    // });
    this.finurl=`https://widget.finnhub.io/widgets/stocks/chart?symbol=${this.Stock}&amp;watermarkColor=%231db954&amp;backgroundColor=white&amp;textColor=black`

    this.recommendationurl=`https://widget.finnhub.io/widgets/recommendation?symbol=${this.Stock}`
    this.fetchData(this.Stock, '7');

    this.getCompanyQuote(this.Stock)
    this.getCompanyProfile(this.Stock)
  }

  switch(){
    if(this.flag=='line'){
      this.flag='candle'
    }
    else if(this.flag=='candle'){
      this.flag='line'
    }
  }

  getRecommendationUrl(){
    return this.recommendationurl
  }
  getUrl(){
    return this.finurl
  }
  createChart(labels: any[], closeData: any[], pointradius: number): void {
    this.ngZone.run(() => {
      // Ensure that the chartCanvas element is available before creating the chart
      if (this.chartCanvas && this.chartCanvas.nativeElement) {
        if (this.chart) {
          this.chart.destroy();
        }

        this.chart = new Chart(this.chartCanvas.nativeElement, {
          type: 'line',
          data: {
            labels: labels.reverse(),
            datasets: [
              {
                data: closeData.reverse(),
                label: 'Close Price',
                pointRadius: pointradius,
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 0, 255, 0.2)',
                fill: {
                  target: 'origin',
                  above: 'rgba(0, 0, 255, 0.2)',
                },
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              x: {
                time: {
                  unit: 'month',
                  displayFormats: {
                    month: 'MMM YYYY',
                  },
                },
                display: true,
              },
            },
          },
        });
      } else {
        console.error('Failed to create chart: canvas element not found.');
      }
    });
  }

  fetchData(stockname: string, duration: string) {
    if (parseInt(duration) > 1) {
      this.market.getHistoricalData(stockname, duration).subscribe((res) => {
        this.responseData = res;
        const labels = this.responseData['historical'].map(
          (rec: { label: any }) => rec['label']
        );
        const closeData = this.responseData['historical'].map(
          (rec: { close: any }) => rec['close']
        );

        if (parseInt(duration) > 400) {
          this.createChart(labels, closeData, 0.1);
        } else {
          this.createChart(labels, closeData, 3);
        }
      });
    } else if (parseInt(duration) == 1) {
      this.market.getHistoricalDataForDay(stockname).subscribe((res) => {
        this.responseData = res;
        console.log(this.responseData);

        this.responseData = this.responseData.slice(0, 14);
        console.log(this.responseData);

        setTimeout(() => {
          const labels = this.responseData['historical'].map(
            (rec: { label: any }) => rec['label']
          );
          const closeData = this.responseData['historical'].map(
            (rec: { close: any }) => rec['close']
          );

          if (parseInt(duration) > 400) {
            this.createChart([], closeData, 0.1);
          } else {
            this.createChart(labels, closeData, 3);
          }
        }, 3000);
      });
    }
  }




  getCompanyQuote(stockSymbol:string){
    this.market.getCompanyQuote(stockSymbol).subscribe(res=>{
      this.companyquote=res
      this.companyquote=this.companyquote[0]
      console.log(this.companyquote);
      
    })
  }
  
  getCompanyProfile(stockSymbol:string){
    this.market.getCompanyProfile(stockSymbol).subscribe(res=>{
      // console.log(res);
      
      this.companyprof=res
      this.companyprof=this.companyprof[0]
    })
  }
}
