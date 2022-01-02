export class Menu {
    title: string;
    list: Array<MenuOption>;
    constructor(data: Partial<Menu> = {}) {
        this.title = data.title || '';
        this.list = data.list || [];
    }
}

export class MenuOption {
    label: string;
    icon: string;
    constructor(data: Partial<MenuOption> = {}) {
        this.label = data.label || '';
        this.icon = data.icon || '';
    }
}
