import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { ProviderProductComponent } from './provider-product/provider-product.component';
import { RecipientProductComponent } from './recipient-product/recipient-product.component';
import { ProfileComponent } from './profile/profile.component'


const routes: Routes = [
  {path:'home', component: HomepageComponent},
  {path:'login', component: LoginpageComponent},
  {path:'login/register', component: RegisterComponent},
  {path:'providerProduct', component: ProviderProductComponent},
  {path:'recipientProduct', component: RecipientProductComponent},
  {path:'profile', component: ProfileComponent},
  {path:'', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
