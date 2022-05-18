import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/component/catalog/catalog.component';
import { GraphSelectComponent } from './graph/components/graph-select/graph-select.component';
import { QueryComponent } from './query/components/query/query.component';
import { SettingsComponent } from './settings/component/settings/settings.component';
import { MainComponent } from './views/main/main.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "",
        component: QueryComponent
      },
      {
        path: "graphs",
        component: GraphSelectComponent
      }
    ]
  },
  {
    path: "catalog",
    component: CatalogComponent
  },
  {
    path: "settings",
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
