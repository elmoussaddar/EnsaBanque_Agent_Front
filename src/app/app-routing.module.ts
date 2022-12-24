import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientLoginFormComponent } from './client-login-form/client-login-form.component';
import { CreateAccountFormComponent } from './create-account-form/create-account-form.component';
import { HomeComponent } from './home/home.component';
import { ListFactureComponent } from './list-facture/list-facture.component';
import { ListTransfertComponent } from './list-transfert/list-transfert.component';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import { PaymentFactureComponent } from './payment-facture/payment-facture.component';
import { ProfileComponent } from './profile/profile.component';
import { ServeClientComponent } from './serve-client/serve-client.component';
import { TransfertDetailsComponent } from './transfert-details/transfert-details.component';
import { VirementDoneComponent } from './virement-done/virement-done.component';
import { VirementFormComponent } from './virement-form/virement-form.component';

const routes: Routes = [
  { path: '', component: ClientLoginFormComponent, pathMatch: 'full' },
  {path:"login", component: ClientLoginFormComponent},
  {path:"clientHome",component: ClientHomeComponent ,children:[
      {path:"profile",component: ProfileComponent},
      {path:"bankTransfert",component:VirementFormComponent},
      {path:"bankTransfert/success",component:VirementDoneComponent},
      {path:"openAccount",component:CreateAccountFormComponent},
      {path:"payBills",component:PaymentFactureComponent},
      {path:"changePassword",component:ChangePasswordComponent},
      {path:"listFacture",component:ListFactureComponent},
      {path:"addClient" , component:AddClientComponent},
      {path:"Home",component:HomeComponent},
      {path:"liste-clients" ,component:ListeClientsComponent},
      {path:"listTransfert",component:ListTransfertComponent},
      {path:"transfertDetails",component:TransfertDetailsComponent},
  ]},
  {path:"serveClient", component: ServeClientComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
