import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientLoginFormComponent } from './client-login-form/client-login-form.component';
import { CreateAccountFormComponent } from './create-account-form/create-account-form.component';
import { HeaderComponent } from './header/header.component';
import { ListFactureComponent } from './list-facture/list-facture.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { PaymentFactureComponent } from './payment-facture/payment-facture.component';
import { ProfileComponent } from './profile/profile.component';
import { VirementDoneComponent } from './virement-done/virement-done.component';
import { VirementFormComponent } from './virement-form/virement-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,VirementFormComponent,
    VirementDoneComponent,NavMenuComponent,
     HeaderComponent,ClientLoginFormComponent,
      ClientHomeComponent, CreateAccountFormComponent,
       PaymentFactureComponent, ChangePasswordComponent,
        ListFactureComponent,ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
