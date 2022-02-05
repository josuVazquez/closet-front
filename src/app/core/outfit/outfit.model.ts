/* eslint-disable no-underscore-dangle */
export class Outfit {
    _id: string;
    img: Array<any>;
    name: string;
    description: string;
    season: string;
    complements: Array<any>;

    constructor(data: Partial<Outfit> = {}) {
        if(!data.name) {
            new Error('Name is requiered');
            return;
        }
        this._id = data._id || '';
        this.name = data.name;
        this.description = data.description || '';
        this.season = data.season || '';
        this.complements = data.complements || [];
    }

    getFotControlValues() {
        return {name: this.name, season: this.season, description: this.description, complements: this.complements};
    }
}
