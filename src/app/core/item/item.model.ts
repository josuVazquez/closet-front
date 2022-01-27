export class Item {
    id: string;
    img: Array<any>;
    name: string;
    type: string;
    description: string;
    season: string;

    constructor(data: Partial<Item> = {}) {
        if(!data.name) {
            new Error('Name is requiered');
            return;
        }
        if(!data.type) {
            new Error('type is requiered');
            return;
        }
        this.id = data.id || '';
        this.type = data.type;
        this.name = data.name;
        this.description = data.description || '';
        this.season = data.season || '';
    }

    getFotControlValues() {
        return {name: this.name, season: this.season, description: this.description};
    }
}
