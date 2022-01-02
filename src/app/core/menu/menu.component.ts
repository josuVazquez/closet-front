import { Component, Input, OnInit } from '@angular/core';
import { Menu } from './menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  @Input() menu: Menu = new Menu();

  constructor() { }

  ngOnInit() {}

}
