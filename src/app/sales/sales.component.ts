import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ServicesService } from '../Services/services.service';
import { SalesIntf } from './sales-intf';



@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor(private injServ : ServicesService ) {
    this.showSales();

    setTimeout(()=>{
      $('#st').DataTable( {
        pagingType: 'full_numbers',
        pageLength: 10,
        processing: true,
        lengthMenu : [5, 10, 25]
      } );
    }, 1);


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

