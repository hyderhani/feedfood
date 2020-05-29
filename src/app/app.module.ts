import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterComponent } from './register/register.component';
import { ProviderProductComponent } from './provider-product/provider-product.component';
import { RecipientProductComponent } from './recipient-product/recipient-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SavedusersComponent } from './savedusers/savedusers.component';
import { UserproductsComponent } from './userproducts/userproducts.component';
import { ActiveproductsComponent } from './activeproducts/activeproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavBarComponent,
    LoginpageComponent,
    RegisterComponent,
    ProviderProductComponent,
    RecipientProductComponent,
    ProfileComponent,
    AddProductComponent,
    SavedusersComponent,
    UserproductsComponent,
    ActiveproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
