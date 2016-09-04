export class yznClass {

    constructor(public x: number) {

    }

    static Log() {
        console.log('Class Log: ');
    }
    public Print() {
        console.log("Class Print" + this.x.toString());
    }
}