import { ContaDestino } from './enumcontadestino.enum';

export interface LancamentoDto {
    conta: bigint, // example: 1; ID da Conta
    contaDestino: ContaDestino, // example: user2; Conta de destino
    data: string, // formato ($date); example: 2021-01-01; Data do Lançamento
    descricao: string, // example: PAGAMENTO CONTA LUZ; Descrição do Lançamento
    login: string, // example: user1; ID da Conta
    planoConta: bigint, // example: 1; ID do Plano de Contas pertinente com a finalidade do lançamento
    valor: number  // formato double; example: 10.12; Valor do Lançamento
}