import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../Services/services.service';
import { TableColumn } from '../table/table-column';
import { SalesIntf } from './sales-intf';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor(private injServ : ServicesService) { 
    this.showSales()
  };

  mySales:SalesIntf[] =[]
  tableSales :SalesIntf[] = []

  showSales(){
    this.injServ.getSales().subscribe((data : any ) =>
    {
      this.mySales = data;
      this.tableSales = data
      console.log("sales :", this.tableSales)
    })
  };

  obj:any ={}
  makeSale(){
    this.injServ.postSale(this.obj).subscribe((item) =>
    {
      this.mySales.push(item)
    })
  };

  tableColumns: Array<TableColumn> = [
    { columnDef: 'id', header: 'Id' ,cell: (element: Record<string, any>) => `${element['id']}` },
    { columnDef: 'product_id', header: 'Product_Id' ,cell: (element: Record<string, any>) => `${element['product_id']}` },
    { columnDef: 'quantity', header: 'Quantity', cell: (element: Record<string, any>) => `${element['quantity']}` },
    { columnDef: 'created', header: 'Date', cell: (element: Record<string, any>) => `${element['created']}` }
  ];


  ngOnInit(): void {}

}
