import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { WelcomeComponent } from './welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { JsonService } from './json.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
  ],
  declarations: [AppComponent, WelcomeComponent],
  providers: [JsonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
