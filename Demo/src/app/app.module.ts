import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './Component/parent/parent.component';
import { ChildComponent } from './Component/child/child.component';
import { HomeComponent } from './Component/home/home.component';
import { ErrorComponent } from './shared/error/error.component';
import { ChildAComponent } from './Component/child-a/child-a.component';
import { ChildBComponent } from './Component/child-b/child-b.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { QueryParamsComponent } from './Component/query-params/query-params.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    HomeComponent,
    ErrorComponent,
    ChildAComponent,
    ChildBComponent,
    NavBarComponent,
    QueryParamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
