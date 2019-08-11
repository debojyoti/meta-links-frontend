import { Component } from '@angular/core';
import { SeoService } from '@trilon/ng-universal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private seo: SeoService
  ) {
    const config = {
      title: 'Meta Links',
      description: 'Customize your social content in seconds!',
      locale: 'en_US',
      url: 'https://meta-links.wep.app',
      type: 'website',
      msapplicationTileColor: '#000',
      themeColor: '#fff',
      og: {
        site_name: 'Meta Links',
        image_url: 'https://trilon.io/meta/og-image.png'
      },
      twitter: {
        image_url: 'https://trilon.io/meta/twitter-image.png',
        summary_card: 'summary_large_image',
      },
      keywords: 'seo, meta tags, meta links, ssr, server side rendering'
    };
    this.seo.initializeBaseMeta(config);
  }
}
