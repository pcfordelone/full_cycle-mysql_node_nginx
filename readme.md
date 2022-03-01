# FullCycle - Desafio Node + MySQL + Ngnix

## **Aluno:** Paulo César Fordelone
---
## Descrição 
Projeto prático para finalização do módulo de Docker do curso Full Cycle 3.0. 

O projeto consiste em fazer uma aplicação básica em Node.js que rode em Docker utilizando o Nginx como proxy reverso, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

"Full Cycle Rocks!" + lista de nomes cadastrada no banco de dados. 

Finalizando, o projeto precisa funcionar baixando este repositório e rodando apenas um comando que é listado abaixo no item **Instalação**

## Instalação
Baixe este repositório e rode o comando a seguir:

```sh
docker-compose up -d --build
```

Obs.: Requer o Docker instalado.