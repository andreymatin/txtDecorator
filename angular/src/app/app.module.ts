import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConfigComponent } from './config/config.component';
import { AboutComponent } from './about/about.component';

import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './editor/editor.component';

import { JqueryService } from './jquery.service';
import { HeaderComponent } from './header/header.component';

/**
 * Routes
 */
const appRoutes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: '', component: EditorComponent, pathMatch: 'full'},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    AboutComponent,
    EditorComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
