import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { MetaEditorComponent } from './screens/meta-editor/meta-editor.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { MyMaskLinksComponent } from './components/my-mask-links/my-mask-links.component';
import { NgUniversalModule } from '@trilon/ng-universal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MetaEditorComponent,
    DashboardComponent,
    MyMaskLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgUniversalModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
