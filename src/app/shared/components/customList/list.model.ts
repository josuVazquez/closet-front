export class List {
    header: string;
    listItem: ListItem[];

    constructor(list: Partial<List> = {}) {
        this.listItem = list.listItem || [];
    }
}

export class ListItem {
    image: string;
    type: string;
    name: string;
    description: string;

    constructor(item: Partial<ListItem> = {}) {
        this.image = item.image || null;
        this.name = item.name || '';
        this.description = item.description || '';
        this.type = item.type || 'Outfit';
    }
}
