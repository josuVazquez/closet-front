import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  itemForm = new FormGroup({
    name: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    season: new FormControl(''),
    description: new FormControl(''),
    complements: new FormControl([]),
  });

  constructor(private loading: LoadingController, private store: Store) { }

  ngOnInit() {
    // this.store.select(selectedItem);
  }

  saveItem() {
    this.loading.create();
    const item = this.itemForm.getRawValue();
    // this.itemService.newItem(item).subscribe( (res) => console.log(res));
    console.log(item);
  }
}
