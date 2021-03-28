import { Lancamento } from './lancamento.interface';

export interface ContaDto {
    id: bigint,
    lancamentos: Lancamento,
    saldo: number
}