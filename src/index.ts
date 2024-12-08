export class IsThisZero {
    private trash: string;

    constructor(trash: any = 'trash') {
        this.trash = trash;
    }

    public isthiszero(value: any): true | false {
        return value === 0 || value === '0' || value === 'zero' || value === 'Zero' || value === '영' || value === '제로' ? true : false;
    }
}
