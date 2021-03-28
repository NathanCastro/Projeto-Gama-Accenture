import { Conta } from './conta.interface';

export interface Usuario {
    cpf: string,
    id: bigint,
    login: string,
    nome: string,
    redefinirSenha: boolean,
    senha: string,
    senhaTemporaria: string
    conta: Conta,
}