import { Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { AccountResumeComponent } from './components/account-resume/account-resume.component';
import { RetirerComponent } from './components/retirer/retirer.component';
import { DepotComponent } from './components/depot/depot.component';
import { DemoOngletComponent } from './components/demo-onglet/demo-onglet.component';
import { Enfant1Component } from './components/enfant1/enfant1.component';
import { Enfant2Component } from './components/enfant2/enfant2.component';

export const routes: Routes = [
  { path: "", redirectTo: "account", pathMatch: "full" },
  { path: "account", component: AccountComponent, title: "Comptes" },
  {
    path: "detail-compte/:id", component: AccountResumeComponent, title: "détail du compte", children: [
      { path: "", redirectTo: "depot", pathMatch: "full" },
      { path: "depot", component: RetirerComponent },
      { path: "retrait", component: DepotComponent }
    ]
  },
  {
    path: "demo-onglets", component: DemoOngletComponent, children: [
      { path: "depot", component: Enfant1Component },
      { path: "retrait", component: Enfant2Component },
    ]
  },

  { path: "**", redirectTo: "account" },
];
