import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientLoginFormComponent } from './client-login-form/client-login-form.component';
import { HeaderComponent } from './header/header.component';
import { ListFactureComponent } from './list-facture/list-facture.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ProfileComponent } from './profile/profile.component';
import { VirementDoneComponent } from './virement-done/virement-done.component';
import { VirementFormComponent } from './virement-form/virement-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListTransfertComponent } from './list-transfert/list-transfert.component';
import { TransfertDetailsComponent } from './transfert-details/transfert-details.component';


@NgModule({
  declarations: [
    AppComponent,VirementFormComponent,
    VirementDoneComponent,NavMenuComponent,
     HeaderComponent,ClientLoginFormComponent,
      ClientHomeComponent,
        
        ListFactureComponent,ProfileComponent, ListTransfertComponent,ListTransfertComponent, TransfertDetailsComponent
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
