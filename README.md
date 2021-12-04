# Encrypter/Decrypter

## Para começar, instale as dependências com:
`yarn install`

## Configure o banco PostgreSQL com:
`yarn createdb`
e 
`yarn setdb` 

(caso precise restaurar as tabelas, use o reset) `yarn resetdb` 

## Execute com:
`yarn run dev`
ou apenas 
`yarn dev`

## Esta api faz a criptografia e descriptografia de textos com entrada em formato json:
{
"name": "texto"
}

## Utilize as seguintes rotas para testar (envie o json acima nos métodos POST):

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