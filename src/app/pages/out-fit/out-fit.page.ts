/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AddItemComponent } from '@shared/components/add-item/add-item.component';
import { List } from '@shared/components/customList/list.model';
import { OutfitService } from '@core/outfit/api/outfit.service';
import { Outfit } from '@core/outfit/outfit.model';

@Component({
  selector: 'app-out-fit',
  templateUrl: './out-fit.page.html',
  styleUrls: ['./out-fit.page.scss'],
})
export class OutFitPage implements OnInit {

  imageSrc = 'assets/img/default-placeholder.png';
  list = new List();
  outfitForm = new FormGroup({
    name: new FormControl('', Validators.required),
    season: new FormControl(''),
    description: new FormControl(''),
    complements: new FormControl([]),
  });
  outfit: Outfit;

  constructor(
    public modalController: ModalController,
    private route: ActivatedRoute,
    private outfitService: OutfitService
  ) { }

  async ngOnInit() {
    this.loadOutfit();
  }

  async addItemToOutfit() {
    const modal = await this.modalController.create({
      component: AddItemComponent,
      componentProps: { title: 'Modal', list: [] }
    });
    return modal.present();
  }

  loadOutfit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(!id) {
      return;
    }
    this.outfitService.getOutfitById(id).subscribe( (outfit) => {
      this.outfit = new Outfit(outfit);
      this.outfitForm.setValue(this.outfit.getFotControlValues());
    });
  }

  saveOutfit() {
    if(this.outfit?._id) {
      this.editOutfit();
    } else {
      this.createOutfit();
    }
  }

  createOutfit() {
    const outFit = this.outfitForm.getRawValue();
    this.outfitService.newOutfit(outFit).subscribe( (res) => console.log(res));
  }

  editOutfit() {
    const outFit = this.outfitForm.getRawValue();
    console.log(outFit);
    this.outfitService.updateById(this.outfit._id, outFit).subscribe( (res) => console.log(res));
  }
}
