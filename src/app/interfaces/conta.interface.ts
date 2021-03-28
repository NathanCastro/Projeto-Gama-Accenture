import { Lancamento } from './lancamento.interface';

export interface Conta {
    descricao: string,
    id: number,
    numero: string,
    saldo: number, //formato double
    tipo: string,
    lancamentos: Array<Lancamento>,
}