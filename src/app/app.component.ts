import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Header } from './core/header/header.model';
import { HeaderService } from './core/header/header.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  header: Header;

  constructor(translate: TranslateService, headerService: HeaderService) {
    translate.setDefaultLang('es');

    headerService.getHeaderData$().subscribe( res => {
      this.header = res;
    });
  }
}
