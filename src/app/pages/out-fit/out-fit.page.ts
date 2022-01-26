import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Outfit } from '@shared/outfit/outfit.model';
import { ModalController } from '@ionic/angular';
import { AddItemComponent } from '@shared/components/add-item/add-item.component';
import { List } from '@shared/components/customList/list.model';
import { OutfitService } from '@shared/outfit/outfit.service';

const IMAGE_DIR = 'stored-images';

interface LocalFile {
  name: string;
  path: string;
  data: string;
}

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
    temporada: new FormControl(''),
    description: new FormControl(''),
    complements: new FormControl([]),
  });

  constructor(
    public modalController: ModalController,
    private route: ActivatedRoute,
    private outfitService: OutfitService
  ) { }

  async ngOnInit() {
    this.loadOutfit()
  }

  async addItemToOutfit() {
    const modal = await this.modalController.create({
      component: AddItemComponent,
      componentProps: { title: 'Modal', list: [] }
    });
    return await modal.present();
  }

  loadOutfit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(!id) {
      return;
    }
    this.outfitService.getOutfitById(id).subscribe( (outfit) => {
      const objOutfit = new Outfit(outfit);
      this.outfitForm.setValue(objOutfit.getFotControlValues());
    });
  }

  saveOutfit() {
    const outFit = this.outfitForm.getRawValue();
    this.outfitService.newOutfit(outFit).subscribe( (res) => console.log(res));
    console.log(outFit);
  }
}
