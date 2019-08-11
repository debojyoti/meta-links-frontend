import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { MetaEditorComponent } from './screens/meta-editor/meta-editor.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';

const routes: Routes = [{
  component: HomeComponent,
  path: "home"
}, {
  component: MetaEditorComponent,
  path: "meta-editor"
}, {
  component: DashboardComponent,
  path: "dashboard"
}, {
  path: '**',
  redirectTo: '/home'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
