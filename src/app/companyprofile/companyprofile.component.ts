import { Component ,Input,OnInit} from '@angular/core';
import { MarketdataService } from '../service/marketdata.service';

@Component({
  selector: 'app-companyprofile',
  templateUrl: './companyprofile.component.html',
  styleUrls: ['./companyprofile.component.css']
})
export class CompanyprofileComponent implements OnInit{

  @Input() Stock:any=''
convertInt(arg0: any) {
  return parseInt(arg0)
}
  src!:string
  companyprofile:any
  constructor(private market:MarketdataService){}

  ngOnInit(): void {
    this.market.getCompanyProfile(this.Stock).subscribe(res=>{
      console.log(res);
      
      this.companyprofile=res
      this.companyprofile=this.companyprofile[0]
      this.src=this.companyprofile['image']
      console.log(this.src);
      
    })
  }
}
