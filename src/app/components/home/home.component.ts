import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { SettingService } from '../../services/settings/setting.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  newsListing: any[] = [];

  constructor(private viewportScroller: ViewportScroller, private _news: NewsService, private _settings: SettingService) {}

  smoothScroll(elementId: HTMLElement) {
    console.log(elementId);
    elementId.scrollIntoView({behavior: 'smooth'})
    
  }

  ngOnInit(): void {
      this.getNewsList();
  }

  getNewsList() {
    this._news.getNews().subscribe(news => {
      
      const newsList = this._settings.simplifyData(news.items);

      this.newsListing = this.shuffleArray(newsList);
      console.log(this.newsListing);
      
    })
  }

  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.slice(0, 4);
}

}
