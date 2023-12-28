import { Component } from '@angular/core';

import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { BlogNewsComponent } from '../blog-news/blog-news.component';
import { BlogLibraryComponent } from '../blog-library/blog-library.component';
import { YoutubeVideosComponent } from '../youtube-videos/youtube-videos.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavBarComponent,
    NavBarComponent,
    BlogNewsComponent,
    BlogLibraryComponent,
    YoutubeVideosComponent,
    ContactUsComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
