import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientLoginFormComponent } from './client-login-form/client-login-form.component';
import { HomeComponent } from './home/home.component';
import { ListAgentsComponent } from './list-agents/list-agents.component';
import { ListTransfertComponent } from './list-transfert/list-transfert.component';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
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
      {path:"addClient" , component:AddClientComponent},
      {path:"Home",component:HomeComponent},
      {path:"liste-clients" ,component:ListeClientsComponent},
      {path:"listTransfert",component:ListTransfertComponent},
      {path:"transfertDetails",component:TransfertDetailsComponent},
  ]},
  {path:"serveClient", component: ServeClientComponent},
  {path:"addAgent", component:AddAgentComponent},
  {path:"allAgents", component:ListAgentsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
