# Developers

Projeto desenvolvido em Node.js utilizando com principal ferramenta para criação das apis express. 

O projeto conta com um arquivo developer.json que é uma biblioteca auxiliar para o Postman, e tambem com o arquivo table.sql que é o banco de dados  que deve ser importado em seu mysql. Lembre de trocar os dados da conexão com o banco no arquivo connection.js

## API endpoints

```
GET /developers
```
Retorna todos os desenvolvedores

```
GET /developers/filter?
```
Retorna os desenvolvedores de acordo com o termo passado via querystring e paginação

```
GET /developers/{id}
```
Retorna os dados de um desenvolvedor

```
POST /developers
```
Adiciona um novo desenvolvedor

```
PUT /developers/{id}
```
Atualiza os dados de um desenvolvedor

```
DELETE /developers/{id}
```
Apaga o registro de um desenvolvedor
