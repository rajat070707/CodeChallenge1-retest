import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule, NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';

import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    NgbAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
