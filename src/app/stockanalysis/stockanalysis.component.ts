import { Component, Input } from '@angular/core';
import { MarketdataService } from '../service/marketdata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stockanalysis',
  templateUrl: './stockanalysis.component.html',
  styleUrls: ['./stockanalysis.component.css']
})
export class StockanalysisComponent {
  Stock:any

  convertInt(arg0: any) {
    return parseInt(arg0)
  }
    src:any
    companyprofile:any
    constructor(private market:MarketdataService,private route:ActivatedRoute){}
  
    ngOnInit(): void {
      this.route.queryParams.subscribe(res=>{
        this.Stock=res['name']
        
      })
      this.market.getCompanyProfile(this.Stock).subscribe(res=>{
        console.log(res);
        
        this.companyprofile=res
        this.companyprofile=this.companyprofile[0]
        // this.src=this.market.getLogo("AAPL").subscribe(res=>{
        //   this.src=res
        //   this.src=this.src[0]['logo']
        //   return this.src
        //   // console.log(this.src);
        // })
        
      })
    }
}
