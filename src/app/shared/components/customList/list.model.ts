export class List {
    header: string;
    listItem: ListItem[];

    constructor(list: Partial<List> = {}) {
        this.header = list.header || null;
        this.listItem = list.listItem || [];
    }
}

export class ListItem {
    image: string;
    title: string;
    description: string;

    constructor(list: Partial<ListItem> = {}) {
        this.image = list.image || null;
        this.title = list.title || '';
        this.description = list.description || '';
    }
}
