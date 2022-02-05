/* eslint-disable no-underscore-dangle */

export type AlertType = 'warning' | 'error' | 'info';
/* eslint-disable @typescript-eslint/member-ordering */
export class AlertModal {

    private _icon: string;
    type: AlertType;
    header: string;
    message: string;
    buttons: Array<any>;

    constructor(data: Partial<AlertModal> = {}) {
        if(!data.type) {
            throw new Error('Type cant be undefined');
        }
        this.type = data.type;
        this.icon = data.type;
        this.header = data.header || '';
        this.message = data.message || '';
        this.buttons = data.buttons || [];
    }

    set icon(type) {
        switch(type) {
            case 'warning':
                this._icon = 'warning-outline';
                break;
            case 'info':
                this._icon = 'information-circle-outline';
                break;
            case 'error':
                this._icon = 'alert-circle-outline';
                break;
        }
    }

    get icon() {
        return this._icon;
    }
}
