import { TransfertDetailsComponent } from './transfert-details/transfert-details.component';
import { ListTransfertComponent } from './list-transfert/list-transfert.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientLoginFormComponent } from './client-login-form/client-login-form.component';
import { ListFactureComponent } from './list-facture/list-facture.component';
import { ProfileComponent } from './profile/profile.component';
import { VirementDoneComponent } from './virement-done/virement-done.component';
import { VirementFormComponent } from './virement-form/virement-form.component';

const routes: Routes = [
  { path: '', component: ClientLoginFormComponent, pathMatch: 'full' },
  {path:"login", component: ClientLoginFormComponent},
  {path:"agentHome",component: ClientHomeComponent ,children:[
      {path:"profile",component: ProfileComponent},
      {path:"bankTransfert",component:VirementFormComponent},
      {path:"bankTransfert/success",component:VirementDoneComponent},
      {path:"listFacture",component:ListFactureComponent},
      {path:"listTransfert",component:ListTransfertComponent},
      {path:"transfertDetails",component:TransfertDetailsComponent},





  ]}

  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
