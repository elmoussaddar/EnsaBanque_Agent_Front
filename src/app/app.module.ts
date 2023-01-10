import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientLoginFormComponent } from './client-login-form/client-login-form.component';
import { HeaderComponent } from './header/header.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
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
import { ServeClientComponent } from './serve-client/serve-client.component';
import { ListTransfertComponent } from './list-transfert/list-transfert.component';
import { TransfertDetailsComponent } from './transfert-details/transfert-details.component';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { ListAgentsComponent } from './list-agents/list-agents.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { AuthInterceptor } from './_helpers/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,VirementFormComponent,
    VirementDoneComponent,NavMenuComponent,
     HeaderComponent,ClientLoginFormComponent,
      ClientHomeComponent,
        ProfileComponent, AddClientComponent, HomeComponent, ListeClientsComponent, ServeClientComponent, ListTransfertComponent, TransfertDetailsComponent, AddAgentComponent, ListAgentsComponent
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
    MatRadioModule,
    KeycloakAngularModule
  ],
  providers: [KeycloakService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  public keycloakReponse: Promise<KeycloakProfile | void> ;
  public keycloakToken: Promise<string>;

  public UserRoles : Array<String>;

  constructor(
    private keycloakAngular: KeycloakService,
 
    ) {
     this.keycloakAngular.init({
        config: {
         url: 'http://ec2-3-86-255-67.compute-1.amazonaws.com:8080/auth',
         realm: 'test',
         clientId: 'transfert_front',
         
         
       },
       initOptions: {
         onLoad: 'login-required',
         checkLoginIframe: false,
         
        },
        
        enableBearerInterceptor: true,
       bearerExcludedUrls: ['/assets', '/clients/public'],
     }).then(() => {
     this.keycloakReponse = this.keycloakAngular.loadUserProfile().then(user => {
       console.log(user.email);
       sessionStorage.setItem("userEmail",JSON.stringify(user.email));


     });

     this.UserRoles = this.keycloakAngular.getUserRoles();
     console.log("User Roles : "+this.UserRoles);

      

     this.keycloakToken=  this.keycloakAngular.getToken()
      console.log(this.keycloakToken);


      sessionStorage.setItem("userRoles", this.UserRoles.join(","));

      sessionStorage.setItem("keycloakToken", JSON.stringify(this.keycloakToken));


       // keycloak initialized
     }).catch((error: any) => console.error(error));
  
    }

  

  }

