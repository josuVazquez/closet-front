export class Outfit {
    id: string;
    img: Array<any>;
    name: string;
    description: string;
    temporada: string;
    complements: Array<any>;

    constructor(data: Partial<Outfit> = {}) {
        if(!data.name) {
            new Error('Name is requiered');
            return;
        }
        this.id = data.id || '';
        this.name = data.name;
        this.description = data.description || '';
        this.temporada = data.temporada || '';
        this.complements = data.complements || [];
    }

    getFotControlValues() {
        return {name: this.name, temporada: this.temporada, description: this.description, complements: this.complements};
    }
}
