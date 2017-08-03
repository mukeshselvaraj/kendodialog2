import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { AppComponent } from './app.component';

@NgModule({
  bootstrap:    [AppComponent],
  declarations: [AppComponent],
  imports:      [BrowserModule, BrowserAnimationsModule, DialogModule, ButtonsModule]
})
export class AppModule {
}

