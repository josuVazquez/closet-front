import { Menu } from '../menu/menu.model';

export class Header {
    title: string;
    menu: Menu;

    constructor(data: Partial<Header> = {}) {
        this.title = data.title || '';
        this.menu = data.menu || null;
    }
}
