import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../Services/services.service';
import { SalesIntf } from './sales-intf';



@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor(private injServ : ServicesService ) {
    this.showSales()
  };



  mySales:SalesIntf[] =[]

  showSales(){
    this.injServ.getSales().subscribe((data : any ) =>
    {
      this.mySales = data
      console.log("sales :", this.mySales)
    })
  };


  ngOnInit(): void {  
  }


  openModal(saleId:any) {
    this.injServ.getOneS(saleId).subscribe((item:any) =>
    {
      console.log(item.id);
    })
   }




}

