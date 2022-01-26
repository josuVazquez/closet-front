export class Item {
    id: string;
    img:Array<any>;
    name: string;
    type: string;
    description: string;
    temporada: string;

    constructor(data:Partial<Item> = {}) {
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
        this.temporada = data.temporada || '';
    }

    getFotControlValues() {
        return {name: this.name, temporada: this.temporada, description: this.description};
    }
}
