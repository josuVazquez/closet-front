import { Component, OnInit } from '@angular/core';
import { List } from './list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  list: List = new List();
  constructor() { }

  ngOnInit() {}

}
