import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContatoListComponent } from './contato/contato-list/contato-list.component';
import { CreateContatoComponent } from './create-contato/create-contato.component';
import { UpdateContatoComponent } from './update-contato/update-contato.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PhonePipe } from './pipes/telefone.pipe';




@NgModule({
  declarations: [
    AppComponent,
    ContatoListComponent,
    CreateContatoComponent,
    UpdateContatoComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
