import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { InstagrammerComponent } from './instagrammer/instagrammer.component';
import { MamesmarketComponent } from './mamesmarket/mamesmarket.component';
import { MicrinfluencerComponent } from './micrinfluencer/micrinfluencer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TiktokComponent } from './tiktok/tiktok.component';
import { YoutubersComponent } from './youtubers/youtubers.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'YouTubers', component: YoutubersComponent },
  { path: 'InstaGrammer', component: InstagrammerComponent },
  { path: 'TikTok', component: TiktokComponent },
  { path: 'MemesMarketing', component: MamesmarketComponent },
  { path: 'MicroInfluencer', component: MicrinfluencerComponent },
  { path: 'Contactus', component: ContactusComponent },
  { path: '*', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
