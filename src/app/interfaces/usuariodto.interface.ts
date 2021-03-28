export interface UsuarioDto{
    cpf: string,  // example: 00454011245; CPF
    login: string,  // example: andre; login de acesso (CPF, Telefone, apelido)
    nome: string,  // example: MARCOS ANDRE; Nome do titular
    senha: string // example: senha123; Senha de acesso
}