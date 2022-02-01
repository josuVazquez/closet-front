import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { List, ListItem } from './list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() listItem: Array<ListItem> = [];
  @Input() header = '';

  @Output() itemClick: EventEmitter<ListItem> = new EventEmitter();

  constructor() {
  }

}
