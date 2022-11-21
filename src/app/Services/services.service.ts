import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdIntf } from '../products/prod-intf';
import { PutProdInf } from '../products/put-prod-inf';
import { SalesIntf } from '../sales/sales-intf';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
  

  url:string = "http://127.0.0.1:8000"


  public QueryOptions = `?$format=application/json;odata.metadata=none`

  getProducts(){
    return this.http.get(  this.url + "/products"  );
 };

 getOneP(id:number){
  return this.http.get(this.url + `/products/${id} `)
};


 getSales(){
  return this.http.get(this.url + "/sales");
  };

  getOneS(id:number){
    return this.http.get(this.url + `/sales/${id} `)
  };

  addProd(prod:any): Observable<any>{
    return this.http.post(this.url + "/products", prod)
  }

  postSale(sale:any): Observable<any>{
    return this.http.post(this.url + "/sales", sale)
  };

  putProd(prod:PutProdInf): Observable<any>{
    return this.http.post(this.url + "/products", prod)
  };

  deleteProd(id: number): Observable<unknown> {
    const url = `${this.url}/products/${id}`;
    return this.http.delete(url)
  };


}
