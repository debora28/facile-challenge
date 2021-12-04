# Encrypter/Decrypter

Descrição: <br/>
API de criptografia e descriptografia de textos utilizando Cipher e Decipher. <br/>
O acesso não requer autenticação. <br/>

| Tecnologias   |
| ---           |
| NodeJS        |
| Express       |
| PostgreSQL    | 

## Preparação e Execução

Instale as dependências com: <br/>
`yarn install`

Instale o PostgreSQL e crie o banco "teste" com: <br/>
`yarn createdb` e `yarn setdb`

Observações: <br/>
(caso precise restaurar as tabelas, use o reset) `yarn resetdb`
<br/>
- Importante: esta API usa usuário e senha padrão do banco, que são Username: "postgres" e Password: "postgres". <br/>

Execute com: <br/>
`yarn run dev` ou apenas `yarn dev`

## Entradas e Saídas

A entrada precisa estar em formato JSON e, obrigatoriamente, conter o campo "name", como segue: <br/>
`{ "name": "texto" }`

O formato da resposta também é em JSON, com mensagem de sucesso, erro ou o registro buscado. <br/>

## Métodos e Rotas

Utilize as seguintes rotas para testar (envie o JSON acima nos métodos POST): <br/><br/>

Buscar todos os registros: <br/>
GET http://localhost:3333/encripts/

Buscar por ID: <br/>
GET http://localhost:3333/encripts/:id

Criar: <br/>
POST http://localhost:3333/encripts/

Atualizar: <br/>
POST http://localhost:3333/encripts/edit/:id

Excluir: <br/>
DELETE http://localhost:3333/encripts/delete/:id

## Possíveis Respostas

- Ao buscar todos, retorna cada registro na seguinte estrutura <br/>
  (os campos createdAt (data de criação) e updatedAt (data de atualização) são requisitados pelo ORM Sequelize): <br/>

```json
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
```

- Após criar o registro, retorna seu id e o texto encriptado: <br/>

```json
{
    "id": 1,
    "encripted_name": "bba09001395c5516405a"
}
```

- Ao buscar por ID, recebe-se o texto desencriptado: <br/>

```json
{
    "name": "Deu certo!"
}
```

- Esta é a resposta após atualizar: <br/>

```json
{
    "message": "Texto atualizado com sucesso. "
}
```

- E esta, após excluir: <br/>

```json
{
    "message": "Texto excluído com sucesso. "
}
```

- Em caso de entrada inválida ou nula, retorna: <br/>

```json
{
    "code": "E_VALIDATION_FAILURE",
    "message": "O campo \"name\" é obrigatório"
}
```

- Em caso de erro de rota, retorna: <br/>

```json
{
    "message": "Não foi possível acessar a rota."
}
```
