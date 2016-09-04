/*
 * yzn 2016/08/04
 * For layer version 1.8.5
 * http://layer.layui.com/1.8.5/
 */
declare var layer: Ilayer;

declare const enum LayerType {
    MessageBox = 0,
    PageLayer = 1,
    Iframe = 2,
    LoadLayer = 3,
    TipsLayer=4
}
declare const enum LayerIcon {

    Warn = 0,
    CircleOK = 1,
    RulePen = 2,
    Forbid = 3,
    Help = 4,
    NoEntry = 5,
    Good = 6,
    Lock = 7,
    SmillingFace = 9,
    CryingFace = 8,
    OK = 10,
    Clock = 11,
    WeiXin = 12,
    SendMail = 14,
    DownLoad = 15,
    Spin = 16

}


interface Ilayer {
    //icon:9-ok  , 8-error
    alert(msg: string, icon?: number): void;
    alert(msg: string, icon: number, ok: () => void);
    alert(msg: string, icon: number, title: string, ok?: () => void);

    closeAll(): void;
    load(msg: string, waitsecond?: number): number;
    close(n: number): void;
    prompt(ops: ILayerPromptOptions, cb: (val: string) => void): void;
    //msg û�б�����
    msg(msg: string, icon?: number): void;
    msg(msg: string, waitsecond: number, icon: number): void;
    msg(msg: string, waitsecond: number, end: () => void): void;
    msg(msg: string, waitsecond: number, icon: number, end: () => void): void;
    msg(msg: string, waitsecond: number, ops: {'type': number, shade:[number,string], rate:string }, end: () => void): void;
   


    confirm(msg:string, yes: (b?:any) => void, title: string, no?:()=>void): void;
    confirm(msg: string, yes: (b?:any) => void, no?: () => void): void;
 

    tab(ops: {
        area: string[],
        data: ({
            title: string,
            content:string
        })[]
    }): number;

    full(index: number, options: any): void;
    title(name: string, index: number): void;
    closeLoad(): void;
    closeTips(): void;
    min(index: number, options: any);
    restore(index: number);

    //���ò�
    area(index: number, options: any);

    //����iframe url
    iframeSrc(index: number, url: string);

    //iframe������Ӧ���
    //������iframe������Ӧ��
    //indexΪ�������
    iframeAuto(index: number);

    //�õ���ǰiframe�����������iframeʱʹ��
    //��ȡ��ǰ����iframe���������
    //ֻ������iframeҳ���ڲ����á������ڲ��ر�����
    //var index = parent.layer.getFrameIndex(window.name);
    //parent.layer.close(index);

    getFrameIndex(name: string): number;
    setTop(layerNow: number): number;


}

interface ILayerPromptOptions {
    
    title?: string|boolean;
    type?: number;  // LayerType����
    maxmin?: boolean;
    area?: string[]; //['auto','auto']
    shift?: string;
    page?: ILayerPageOptions | any;  //��type==LayerType.PageLayer ���ô˲���
    end?: () => void;  //�㱻���׹رպ�ִ�е��¼�.
    dialog?: {     //��type==LayerType.MessageBox  ���ô˲���
        msg: string,  //'������ο���ǰ�˿�����'
        btns: number,  //2
        btn:string[], //��ť����
        type: number, //4 �Ի���ͼ������ LayerIcon����
        yes?: (index?:number) => void,  //��ť1�Ļص�
        no?: (index?:number) => void   //��ť2�Ļص�
    };
    border?: [number, number, string] | [number];  // [�߿��С, ͸����, ��ɫ]
    closeBtn?: [number, boolean]; // [�رհ�ť�ķ��֧��0��1��, true]
    time?: number; //0��ʾ���Զ��رգ���3����Զ��رգ�time: 3����
    zIndex?: number;
    iframe?: {
        src: string
    };
    shadeClose?: boolean;
    success: (layero: JQuery) => void;  //�㵯���ɹ���Ļص�����. 

}


interface ILayerPageOptions {
    //��Ҫ�ر�ע����ǣ�dom��html��urlֻ���趨����һ�����У�������html��url�������Ҳ���ÿ��ֵ��
    html?: string,
    dom?: string,  //'#id'
    url?: string, //ajax�����ַ
    ok?: (datas: any) => void  //ajax������Ϻ�ִ�еĻص�

}

interface JQueryStatic {

    layer(ops:ILayerPromptOptions): any;
}



