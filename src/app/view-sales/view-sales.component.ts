import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../Services/services.service';

@Component({
  selector: 'app-view-sales',
  templateUrl: './view-sales.component.html',
  styleUrls: ['./view-sales.component.css']
})
export class ViewSalesComponent implements OnInit {

  constructor(private injServ : ServicesService,  private route: ActivatedRoute, private router:Router) { }

  mySale:any =[]

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.injServ.getOneS(id).subscribe((item:any) => 
    {
      this.mySale = item;
      console.log(item);
    })
  };

// button action implementing route
  onBack():void{
    this.router.navigate(['/product']);
  };


}
