import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../Services/services.service';
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { ActivatedRoute,Router } from '@angular/router';
import { SalesIntf } from '../sales/sales-intf';



@Component({
  selector: 'app-ms-modal',
  templateUrl: './ms-modal.component.html',
  styleUrls: ['./ms-modal.component.css']
})
export class MsModalComponent implements OnInit{

  constructor(private injServ : ServicesService , private formBuilder: FormBuilder, private route: ActivatedRoute, private router:Router) {
   }

  id:number = Number(this.route.snapshot.paramMap.get('id'));
  quantity = 1
  price! :number
  name! : string;



  mySales:SalesIntf[] =[]
  // make sale form
  myForm = this.formBuilder.group({
    product_id : [this.id ],
    quantity : ['']
  });

  makeSale(myform:any){
    console.log(myform.value)

    this.injServ.postSale(this.myForm.value).subscribe((item) =>
    {
      console.log(this.myForm.value)
      console.log("sale item",item)
      this.router.navigate(['/product']);
    })
  };


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.injServ.getOneP(id).subscribe((item:any) =>
    {
      console.log("one item",item);
      this.price = item.sp
      this.name = item.name
    })
  };


  onBack():void{
    this.router.navigate(['/product']);
  };



}
