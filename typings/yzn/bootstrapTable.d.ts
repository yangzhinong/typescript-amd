//interface JQueryStatic {

    
//}

interface bootstrapTableColParam {
    radio?: boolean;
    checkbox?: boolean;
    field?: string;
    title?: string;
    titleTooltip?: string;
    class?: string;
    rowspan?: number;
    colspan?: number;
    align?: 'left' | 'right' | 'center';
    halign?: string;  // ��ͷ����
}

interface bootstrapTableOption {
    data?: any[];
    columns?: bootstrapTableColParam[];
    url?: string;
    method?: 'get' | 'post';
    cache?: boolean,
    icons?: any;  // �Զ���ͼ�� { }
    iconsPrefix?: string;
    classes?: string;  //table table-hover
    sortClass?: string;
    height?: number;
    striped?: boolean;  //���б�ɫ
    undefinedText?: string; //������Ϊundefinedʱ �����ʾ.
    sortName?: string | (() => string);
    sortOrder?: 'asc' | 'desc';
    pagination?: boolean;
    paginationLoop?: boolean;
    sidePagination?: 'client' | 'server';
    pageNumber?: number; //��ҳҳ��
    pageSize?: number; // ҳ��������.
    pageList?: number[]; //ҳ������ѡ��������.
    search?: boolean; //�Ƿ�����������.
    searchOnEnterKey?: boolean;
    strictSearch?: boolean;
    searchText?: string; //��ʼ�������ı�.
    searchTimeOut?: number;
    trimOnSearch?: boolean;
    showHeader?: boolean;
    showFooter?: boolean;
    showColumns?: boolean;  //�Ƿ���ʾ��Щ����Ҫ��ʾ.
    showRefresh?: boolean;
    showPaginationSwitch?: boolean;  //�Ƿ���ʾ��������ѡ���, �� pageList������.
    minimumCountColumns?: number;  //������С�ڴ�ֵʱ��������������������Ĭ��ֵΪ1
    idField?: string; //ָ��������.
    uniqueId?: string; // Indicate an unique identifier for each row.
    toolbarAlign?: string;
    buttonsAlign?: string;
    searchAlign?: string;
    paginationVAlign?: 'top' | 'bottom' | 'both';
    paginationHAlign?: string;

    paginationPreText?: string; // '<'
    paginationNextText?: string; // '>'
    clickToSelect?: boolean; // false;
    singleSelect?: boolean; // ����Ϊtrue, ����ֹ��ѡ.
    toolbar?: string; // һ��jQuery ѡ������ָ���Զ����toolbar ����:  #toolbar, .toolbar.
    checkboxHeader?: boolean; // ����false ������ͷ����check-all checkbox .
    maintainSelected?: boolean; // ����Ϊ true �ڵ����ҳ��ť��������ťʱ������סcheckbox��ѡ����
    sortable?: boolean;  //����Ϊfalse ����ֹ�����е�����
    silentSort?: boolean; //����Ϊ false ���ڵ����ҳ��ťʱ���Զ���ס��������� sidePagination����Ϊ serverʱ��Ч
    rowStyle?: ((rowData: any, rowIndex: number) => string); //�Զ�������ʽ ����Ϊ: row: ������; index: ���±�; ����ֵ����Ϊclass����css
    rowAttributes?: ((rowData: any, rowIndex: number) => any);


} 




interface JQuery {
    bootstrapTable(opt?: bootstrapTableOption): void;
    /*
     * uncheckAll
     * resetView
     * getSelections
     */
    bootstrapTable(cmd: string): any;
    bootstrapTable(cmd: "uncheckAll"): void;
    bootstrapTable(cmd: "resetView"): void;
    bootstrapTable(cmd: "getSelections"): any[];
    bootstrapTable(cmd: string, data: any): void;
    bootstrapTable(cmd: "checkBy", data: IbootstrapTableCheckByData): void;
    

}

interface IbootstrapTableCheckByData {
    field: string;
    values: number[];

}


