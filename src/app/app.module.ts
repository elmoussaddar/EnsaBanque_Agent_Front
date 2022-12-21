import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
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
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatTreeModule} from '@angular/material/tree';
import {MatTabsModule} from '@angular/material/tabs';
import { AddClientComponent } from './add-client/add-client.component';
import { HomeComponent } from './home/home.component';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [
    AppComponent,VirementFormComponent,
    VirementDoneComponent,NavMenuComponent,
     HeaderComponent,ClientLoginFormComponent,
      ClientHomeComponent, CreateAccountFormComponent,
       PaymentFactureComponent, ChangePasswordComponent,
        ListFactureComponent,ProfileComponent, AddClientComponent, HomeComponent, ListeClientsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    MatTreeModule,
    MatTabsModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
