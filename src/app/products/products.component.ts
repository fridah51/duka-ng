import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../Services/services.service';
import { ProdIntf } from './prod-intf';
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { ActivatedRoute,Router } from '@angular/router';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private injServ : ServicesService , private formBuilder: FormBuilder , private router:Router) { };

  myProducts: ProdIntf[]= []
  tableData! : ProdIntf[]

  showProducts(){
    this.injServ.getProducts().subscribe((data:any) =>
    {
      this.myProducts = data;
      console.log("products :", this.myProducts)
    })
  };


  item:any = {}
  editProd(){
    this.injServ.putProd(this.item).subscribe((edit) =>
    {
      console.log(this.myProducts)
    })
  };


  // add prod form
  ngForm = this.formBuilder.group(
    {
      name :new FormControl(""),
      bp: new FormControl(""),
      sp: new FormControl("")
    });

  addProdt(){
    this.injServ.addProd(this.ngForm.value).subscribe((item) =>
    {
      this.myProducts.push(item)
      this.router.navigate(['/product']);
    })
  };



  ngOnInit(): void {
    this.showProducts()
  }


}
