import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonserviceService } from './commonservice.service';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { InstagrammerComponent } from './instagrammer/instagrammer.component';
import { MamesmarketComponent } from './mamesmarket/mamesmarket.component';
import { MicrinfluencerComponent } from './micrinfluencer/micrinfluencer.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TiktokComponent } from './tiktok/tiktok.component';
import { YoutubersComponent } from './youtubers/youtubers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    YoutubersComponent,
    InstagrammerComponent,
    MicrinfluencerComponent,
    TiktokComponent,
    MamesmarketComponent,
    PagenotfoundComponent,
    ContactusComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CommonserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
