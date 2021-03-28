import { EnumTransacao } from './enumtransacao.enum';

export interface PlanoConta {
    descricao: string,
    id: bigint,
    login: string,
    padrao: boolean,
    tipoMovimento: EnumTransacao
}