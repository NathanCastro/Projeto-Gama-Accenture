import { Conta } from './conta.interface';
import { Usuario } from './usuario.interface';

export interface Sessao {
    conta: Conta,
    contaCredito: Conta,
    dataFim: Date,  //formato date
    dataInicio: Date,  //formato date
    token: string,
    usuario: Usuario
}