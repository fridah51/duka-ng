import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { SalesComponent } from './sales/sales.component';
import { ViewSalesComponent } from './view-sales/view-sales.component';
import { VsgGuard } from './view-sales/vsg.guard';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path: 'dashboard', component:DashboardComponent,pathMatch: 'full' },
  { path: 'product', component:ProductsComponent ,pathMatch: 'full'},
  { path: 'sale', component:SalesComponent ,pathMatch: 'full'},
  { path: 'sale/:id',canActivate:[VsgGuard] ,component:ViewSalesComponent ,pathMatch: 'full'},
  { path: '', component:WelcomeComponent ,pathMatch: 'full'},
  { path: '**', redirectTo:'/', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
