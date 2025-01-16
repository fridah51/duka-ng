import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {NgbModal ,ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap' ;
import { ServicesService } from '../Services/services.service';
import { SalesIntf } from './sales-intf';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit , OnChanges{

  constructor(private injServ : ServicesService ,private modalService:NgbModal , private formBuilder: FormBuilder , private router:Router ) {
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

  amt:any

  saleId:any 

  closeResult:string | undefined

  mySales:SalesIntf[] =[]

  payments:any = []

  showSales(){
    this.injServ.getSales().subscribe((data : any ) =>
    {
      this.mySales = data
      console.log("sales :", this.mySales)
    })
  };

  // stkpush or makepayment
  ngForm = this.formBuilder.group(
    {
      amount :'',
      mobile:''
    });
    

  stkPush(){
    console.log(this.ngForm.value)
    this.injServ.postStk(this.ngForm.value).subscribe((item) =>
    { 
      console.log(item)
      this.router.navigate(['/sale']);
    })
  }


  openModal(saleId:any,modal:any) {
    this.modalService.open(modal , {ariaLabelledBy: 'modal-basic-title'}).result.then((result) =>
      {
        this.closeResult = `Closed with : ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissedReason(reason)}`;
      });
      this.injServ.getOneS(saleId).subscribe((item:any) =>
      {
        console.log("saleId",saleId)
        var qty = item[0].quantity
        var sp = item[0].prod.sp
        this.amt = sp * qty
        console.log(this.amt)
      });
  }


  private getDismissedReason(reason:any): string {
    if (reason === ModalDismissReasons.ESC){
      return 'by presssing ESC';
    }else if (reason === ModalDismissReasons.BACKDROP_CLICK){
      return 'by clicking on backdrop';
    }else {
      return `with: ${reason}`;
    }
  }



  ngOnInit(): void {
  }


  ngOnChanges(changes: SimpleChanges): void {
    
  }

}

