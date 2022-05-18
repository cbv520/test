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
import { MainComponent } from './views/main/main.component';
import { SettingsComponent } from './settings/component/settings/settings.component';
import { CatalogComponent } from './catalog/component/catalog/catalog.component';
import { GraphSelectComponent } from './graph/components/graph-select/graph-select.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    G2Component,
    ServiceDesccriptionComponent,
    QueryComponent,
    MainComponent,
    SettingsComponent,
    CatalogComponent,
    GraphSelectComponent
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
