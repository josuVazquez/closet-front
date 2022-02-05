/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '@core/item/api/item.service';
import { Item } from '@core/item/item.model';
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
    description: new FormControl('')
  });

  item: any;

  constructor(private loading: LoadingController,
    private route: ActivatedRoute,
    private itemService: ItemService,
    private store: Store) { }

  ngOnInit() {
    this.loadItem();
  }

  loadItem() {
    const id = this.route.snapshot.paramMap.get('id');
    if(!id) {
      return;
    }
    this.itemService.getItemById(id).subscribe( (outfit) => {
      this.item = new Item(outfit);
      this.itemForm.setValue(this.item.getFotControlValues());
    });
  }

  saveItem() {
    if(this.item?._id) {
      this.editItem();
    } else {
      this.createItem();
    }
  }

  createItem() {
    const outFit = this.itemForm.getRawValue();
    this.itemService.newItem(outFit).subscribe( (res) => console.log(res));
  }

  editItem() {
    const outFit = this.itemForm.getRawValue();
    console.log(outFit);
    this.itemService.updateById(this.item?._id, outFit).subscribe( (res) => console.log(res));
  }
}
