import { PlanoConta } from './planoconta.interface';

export interface Lancamento {
    conta: number,
    data: string, //formato date
    descricao: string,
    id: number,
    planoConta: PlanoConta,
    tipo: string,
    valor: number
}