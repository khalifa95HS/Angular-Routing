import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildAComponent } from './Component/child-a/child-a.component';
import { ChildBComponent } from './Component/child-b/child-b.component';
import { ChildComponent } from './Component/child/child.component';
import { HomeComponent } from './Component/home/home.component';
import { ParentComponent } from './Component/parent/parent.component';
import { QueryParamsComponent } from './Component/query-params/query-params.component';
import { ErrorComponent } from './shared/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'query/:id/:id1/:id2', component: QueryParamsComponent },
  {
    path: 'parent', component: ParentComponent, children: [
      { path: 'child', component: ChildComponent },
      { path: 'childa', component: ChildAComponent },
      { path: 'childb', component: ChildBComponent }
    ]
  },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
