interface JQueryStatic {

    html5Validate: IHtml5Vailate;
}

interface JQuery {
    testRemind(msg: string): void;

    //��һ���ط�д���������.
    disabled: boolean;
    enabled: boolean;
    render(): string;
    render(data: any): string;
    live(event: string, cb: any);
}

interface IHtml5Vailate {
    isAllpass(obj: JQuery): boolean;
}

