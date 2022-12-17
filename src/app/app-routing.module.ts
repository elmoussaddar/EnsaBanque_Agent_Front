import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientLoginFormComponent } from './client-login-form/client-login-form.component';
import { CreateAccountFormComponent } from './create-account-form/create-account-form.component';
import { ListFactureComponent } from './list-facture/list-facture.component';
import { PaymentFactureComponent } from './payment-facture/payment-facture.component';
import { ProfileComponent } from './profile/profile.component';
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

  ]}

  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
