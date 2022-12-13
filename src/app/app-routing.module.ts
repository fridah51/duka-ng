import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MsModalComponent } from './ms-modal/ms-modal.component';
import { ProductsComponent } from './products/products.component';
import { SalesComponent } from './sales/sales.component';
import { AuthGuard } from './Services/auth.guard';
import { SecureInnerPagesGuard } from './Services/secure-inner-pages.guard';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ViewSalesComponent } from './view-sales/view-sales.component';
import { VsgGuard } from './view-sales/vsg.guard';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path: 'user-profile',component: UserProfileComponent ,canActivate: [AuthGuard] },
  { path: 'sign-in',component: SignInComponent },
  { path: 'dashboard', component:DashboardComponent,pathMatch: 'full',canActivate: [AuthGuard] },
  { path: 'product', component:ProductsComponent ,pathMatch: 'full', canActivate: [AuthGuard],},
  { path: 'sale', component:SalesComponent ,pathMatch: 'full' ,canActivate: [AuthGuard]  },
  { path: 'sale/:id' ,component:ViewSalesComponent ,pathMatch: 'full' },
  { path: 'product/:id', component:MsModalComponent ,pathMatch: 'full' },
  { path: 'home', component:WelcomeComponent ,pathMatch: 'full'},
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: '**', redirectTo:'/home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
