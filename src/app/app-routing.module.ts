import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { G2Component } from './g2/components/g2/g2.component';
import { GraphComponent } from './graph/components/graph/graph.component';

const routes: Routes = [
  {
    path: "",
    component: GraphComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
