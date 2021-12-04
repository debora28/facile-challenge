# Encrypter/Decrypter
Descrição:
API de criptografia e descriptografia de textos (não requer autenticação).
Tecnologias: NodeJS, Express, banco PostgreSQL

## Preparação e Execução
Instale as dependências com:
`yarn install`

Instale o PostgreSQL e crie o banco "teste" com:
`yarn createdb`  e  `yarn setdb` 

Observações:
(caso precise restaurar as tabelas, use o reset) `yarn resetdb` 
(Importante: esta API usa usuário e senha padrão do banco, que são Username: "postgres" e Password: "postgres")

Execute com:
`yarn run dev`  ou apenas  `yarn dev`

## Entradas e Saídas 
A entrada precisa estar em formato JSON e, obrigatoriamente, conter o campo "name":
{ "name": "texto" }

O formato da resposta também é em JSON, com mensagem de sucesso, erro ou o registro buscado.

## Métodos e Rotas
Utilize as seguintes rotas para testar (envie o JSON acima nos métodos POST):

Buscar todos os registros: 
GET http://localhost:3333/encripts/

Buscar por ID:
GET http://localhost:3333/encripts/:id

Criar: 
POST http://localhost:3333/encripts/

Atualizar:
POST http://localhost:3333/encripts/edit/:id

Excluir:
DELETE http://localhost:3333/encripts/delete/:id

## Possíveis Respostas

- Ao buscar todos, retorna cada registro na seguinte estrutura 
(os campos createdAt (data de criação) e updatedAt (data de atualização) são requisitados pelo ORM Sequelize):
{
    "data": [
        {
            "id": 1,
            "name": "bba09001395c5516405a",
            "createdAt": "2021-12-04T13:10:47.464Z",
            "updatedAt": "2021-12-04T13:10:47.464Z"
        }
    ]
}

- Após CREATE, retorna o id e o texto encriptado do registro criado:
{
    "id": 1,
    "encripted_name": "bba09001395c5516405a"
}

- Ao buscar por ID, recebe-se o texto desencriptado:
{
    "name": "Deu certo!"
}

- Esta é a resposta após atualizar:
{
    "message": "Texto atualizado com sucesso. "
}

- E esta, após excluir:
{
    "message": "Texto excluído com sucesso. "
}

- Em caso de entrada inválida ou nula, retorna:
{
    "code": "E_VALIDATION_FAILURE",
    "message": "O campo \"name\" é obrigatório"
}

- Em caso de erro de rota, retorna:
{
    "message": "Não foi possível acessar a rota."
}

