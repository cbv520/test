import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphComponent } from './graph/components/graph/graph.component';
import { G2Component } from './g2/components/g2/g2.component';
import { ServiceDesccriptionComponent } from './service-description/components/service-desccription/service-desccription.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QueryComponent } from './query/components/query/query.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    G2Component,
    ServiceDesccriptionComponent,
    QueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
