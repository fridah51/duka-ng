import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../Services/services.service';
import { ProdIntf } from './prod-intf';
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { ActivatedRoute,Router } from '@angular/router';
import { ModalDismissReasons, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private injServ : ServicesService , private formBuilder: FormBuilder , private router:Router ,private modalService:NgbModal) {
    setTimeout(()=>{
      $('#pt').DataTable( {
        pagingType: 'full_numbers',
        pageLength: 10,
        processing: true,
        lengthMenu : [5, 10, 25]
      } );
    }, 1);

  };

  myProducts: ProdIntf[]= []
  tableData! : ProdIntf[]
  closeResult:string | undefined
  id :any
  name:any
  sp:any
  bp:any


  showProducts(){
    this.injServ.getProducts().subscribe((data:any) =>
    {
      this.myProducts = data;
      console.log("products :", this.myProducts)
    })
  };


  // edit prod form
  edForm = this.formBuilder.group(
    {
      ename : new FormControl(""),
      ebp: new FormControl(""),
      esp: new FormControl("")
    });
  
  editProd(){
    this.injServ.putProd(this.edForm.value).subscribe((edit) =>
    {
      console.log(edit)
      this.myProducts.push(edit)
      console.log(this.myProducts)
      this.router.navigate(['/product']);
    })
  };


  // open edit modal 
  openModal(pid:number, modal:any) {
    this.modalService.open(modal , {ariaLabelledBy: 'modal-basic-title'}).result.then((result) =>
    {
      this.closeResult = `Closed with : ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissedReason(reason)}`;
    });
    this.injServ.getOneP(pid).subscribe((onep) =>
    {
      console.log(onep)

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
