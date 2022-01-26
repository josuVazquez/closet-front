import { Component, OnInit } from '@angular/core';
import { List } from '../customList/list.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  title: string;
  list: List;

  constructor() { }

  ngOnInit() {}

}
