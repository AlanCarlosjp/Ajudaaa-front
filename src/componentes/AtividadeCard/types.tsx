export type UltimasAtividadesType = {
    id: number;
    valor: number;
    titulo: string;
    data: string;
    tipoTransacao: 'compra' | 'deposito';
}


export interface UltimasAtividadesProp {
    data: UltimasAtividadesType[];
}

