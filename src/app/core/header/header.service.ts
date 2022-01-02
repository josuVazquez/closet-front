import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Menu, MenuOption } from '../menu/menu.model';
import { Header } from './header.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private menu = new Menu({ title: 'Menu', list: [
    new MenuOption({ icon: 'mail', label: 'Ibox'})
  ]});

  private header = new Header({title: 'appName', menu: this.menu });


  private headerData: BehaviorSubject<Header> = new BehaviorSubject(this.header);


  public getHeaderData(): Observable<Header> {
    return this.headerData.asObservable();
  }
}

