/* eslint-disable no-underscore-dangle */
export class Item {
    _id: string;
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
        this._id = data._id || '';
        this.type = data.type;
        this.name = data.name;
        this.description = data.description || '';
        this.season = data.season || '';
    }
    
    get id() {
        return this._id;
    }

    getFotControlValues() {
        return {name: this.name, season: this.season, description: this.description};
    }
}
