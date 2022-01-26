import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { List, ListItem } from './list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() list: List = new List();
  @Output() itemClick: EventEmitter<ListItem> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}
