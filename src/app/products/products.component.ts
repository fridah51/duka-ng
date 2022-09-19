import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../Services/services.service';
import { TableColumn } from '../table/table-column';
import { ProdIntf } from './prod-intf';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private injServ : ServicesService ) {
    this.showProducts()

   };

  myProducts: ProdIntf[]= []
  tableData : ProdIntf[] = [
    {name: 'gin', bp: 4000, sp: 5000, id: 1},
    {name: 'Guiness', bp: 150, sp: 200, id: 2}
  ];

  showProducts(){
    this.injServ.getProducts().subscribe((data:any) =>
    {
      this.myProducts = data;
      this.tableData = this.myProducts
      console.log("products :", this.tableData)
    })
  };


  item:any = {}
  editProd(){
    this.injServ.putProd(this.item).subscribe((edit) =>
    {
      console.log(this.myProducts)
    })
  };


  tableColumnp: Array<TableColumn> = [
    { columnDef: 'id', header: 'Id' ,cell: (element: Record<string, any>) => `${element['id']}` },
    { columnDef: 'name', header: 'Name' ,cell: (element: Record<string, any>) => `${element['name']}` },
    { columnDef: 'bp', header: 'BP', cell: (element: Record<string, any>) => `${element['bp']}` },
    { columnDef: 'sp', header: 'SP', cell: (element: Record<string, any>) => `${element['sp']}` }
  ];


  ngOnInit(): void {}



}
