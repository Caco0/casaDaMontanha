import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BlogNewsComponent } from './components/blog-news/blog-news.component';
import { BlogLibraryComponent } from './components/blog-library/blog-library.component';
import { YoutubeVideosComponent } from './components/youtube-videos/youtube-videos.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    HomeComponent,
    NavBarComponent,
    BlogNewsComponent,
    BlogLibraryComponent,
    YoutubeVideosComponent,
    ContactUsComponent,
    FooterComponent,
  ],
})
export class AppComponent {
  title = 'casaDaMontanha';
}
