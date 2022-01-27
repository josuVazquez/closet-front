import { Component, Input, OnInit } from '@angular/core';
import { Header } from './header.model';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  header: Header = new Header();
  headerSubscription: any;

  constructor(private headerService: HeaderService) {
    this.headerService.getHeaderData$().subscribe( data => {
      this.header = data;
    });
  }

  ngOnInit() {}

  onDestroy() {
    this.headerSubscription.unSubscribe();
  }
}
