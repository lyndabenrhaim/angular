import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListerCandidaturesComponent } from './lister-candidatures/lister-candidatures.component';
import { ListerPostesComponent } from './lister-postes/lister-postes.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { SupprimePostesComponent } from './supprime-postes/supprime-postes.component';
import { AjoutCondidatureComponent } from './ajout-condidature/ajout-condidature.component';
import { AjoutPosteComponent } from './ajout-poste/ajout-poste.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'condidatures', component: ListerCandidaturesComponent },
  { path: 'ajout_condidatures/:id', component: AjoutCondidatureComponent },
  { path: 'postes', component: ListerPostesComponent },
  { path: 'ajouter_postes', component: AjoutPosteComponent },
  { path: 'supprime_poste', component: SupprimePostesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent },
  { path: '*', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
