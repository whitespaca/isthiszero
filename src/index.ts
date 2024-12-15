import { zeros } from "./module/zeros";

export class IsThisZero {
    private trash: string;

    constructor(trash: any = 'trash') {
        this.trash = trash;
    }

    public isthiszero(value: any): true | false {
        return zeros.includes(value)
    }
}
