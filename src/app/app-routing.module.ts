import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { SalesComponent } from './sales/sales.component';
import { ViewSalesComponent } from './view-sales/view-sales.component';
import { VsgGuard } from './view-sales/vsg.guard';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'dashboard', component:DashboardComponent },
  { path: 'products', component:ProductsComponent },
  { path: 'sales', component:SalesComponent },
  { path: 'sales/:id',canActivate:[VsgGuard] ,component:ViewSalesComponent },
  { path: '', component:WelcomeComponent },
  { path: '**', redirectTo:'/' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
