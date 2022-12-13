import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {NgbModal ,ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap' ;
import { ServicesService } from '../Services/services.service';
import { SalesIntf } from './sales-intf';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

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

  closeResult:string | undefined

  mySales:SalesIntf[] =[]

  showSales(){
    this.injServ.getSales().subscribe((data : any ) =>
    {
      this.mySales = data
      console.log("sales :", this.mySales)
    })
  };


  mySale:any = []
  // get one sale
 

  // stkpush or makepayment
  ngForm = this.formBuilder.group(
    {
      amount :new FormControl(""),
      mobile: new FormControl("")
    });

  stkPush(){
    this.injServ.postStk(this.ngForm.value).subscribe((item) =>
    {
      console.log(item)
      this.router.navigate(['/sale']);
    })
  }

 

  openModal(saleId:any) {
    this.modalService.open(saleId , {ariaLabelledBy: 'modal-basic-title'}).result.then((result) =>
    {
      this.closeResult = `Closed with : ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissedReason(reason)}`;
    });
    this.injServ.getOneS(saleId).subscribe((item:any) =>
    {
      console.log(item.id)
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


}

