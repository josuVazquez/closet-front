import { Component, OnInit } from '@angular/core';
import { KebabMenuService } from './kebab-menu.service';

@Component({
  selector: 'app-kebab-menu',
  templateUrl: './kebab-menu.component.html',
  styleUrls: ['./kebab-menu.component.scss'],
})
export class KebabMenuComponent implements OnInit {

  constructor(public kebabService: KebabMenuService) { }

  ngOnInit() {}

}
