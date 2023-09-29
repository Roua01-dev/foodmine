import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import { OrderTrackPageComponent } from './components/pages/order-track-page/order-track-page.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { AdminPageComponent } from './components/pages/admin/admin-page/admin-page.component';
import { DashboardComponent } from './components/pages/admin/dashboard/dashboard.component';
import { ViewPageComponent } from './components/pages/admin/CRUD/view-page/view-page.component';
import { AddPageComponent } from './components/pages/admin/CRUD/add-page/add-page.component';
import { EditPageComponent } from './components/pages/admin/CRUD/edit-page/edit-page.component';

const routes: Routes = [
{path:'',component:HomeComponent},
  {path:'search/:searchTerm',component:HomeComponent},
  {path:'tag/:tag',component:HomeComponent},
   {path:'food/:id',component:FoodPageComponent},
   {path:'cart-page',component:CartPageComponent},
   {path:'login',component:LoginPageComponent},
   {path:'profile',component:ProfileComponent},
   { path: 'admin', component: AdminPageComponent, children: [
    { path: 'dashboard',component:DashboardComponent},
    { path:'view',component:ViewPageComponent},
    { path:'add',component:AddPageComponent}

] },

{ path:'edit/:id',component:EditPageComponent},




   {path:'register',component:RegisterPageComponent},
   {path:'checkout',component:CheckoutPageComponent,canActivate:[AuthGuard]},
   {path:'payment',component:PaymentPageComponent,canActivate:[AuthGuard]},
   {path:'track/:orderId',component:OrderTrackPageComponent,canActivate:[AuthGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[AdminPageComponent,
                                  DashboardComponent]
