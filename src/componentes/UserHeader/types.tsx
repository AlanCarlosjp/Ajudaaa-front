type HeaderType = {
    nome: string;
    foto: string;
}


export interface HeaderProp {
    headerProp: HeaderType
    action?: () => void;
}