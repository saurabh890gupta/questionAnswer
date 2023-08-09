import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { NewChildComponent } from './new-child/new-child.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnswerComponent } from './answer/answer.component';
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    NewChildComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
