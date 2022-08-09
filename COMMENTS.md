# Instruções de como instalar e rodar o projeto

## 1 - Clone o repositório, na brach master.

## 2 - Após clonar entre na pasta /api e digite npm instal, para instalar as depedências.
### 2.1 - Na raiz da pasta /api, crie o arquivo .env, prenchendo os seguintes campos, DB_USER= Seu usuário, PASSWORD=Sua senha, DATABASE=registration, PORT=3001
### 2.2 - Criado e preenchido o arquivo .env, execute os seguintes comandos no terminal, npx sequelize-cli db:create, e depois npx sequelize-cli db:migrate, isso fara com que o banco seja criado, já com as tabelas.
### 2.3 - Feito esses passos, dentro da pasta /api, digite o comando npm start, para ligar a api.

## 3 - Agora entre na pasta /frontend, e digite npm instal, para instalar as depedências.
### 3.1 - Feito a instalção das depedências nas pasta /frontend, digite o comando ainda dentra da pasta /frontend npm start, para ligar a aplicação, e a mesma já estara pronta para uso.


# Resposta as seguintes perguntas:
## Decisão da arquitetura utilizada ?
  ### A arquitetura escolhida foi o MVC, porém só foi aplicado os conceitos de models, e controllers, sendo a camada de view o proprio app(frontend), que esta consumindo a api.

## Lista de bibliotecas de terceiros utilizadas ?
  ### Api => cors, dotenv, mysql2(drive), sequelize(ORM), express(Framework). Frontend => axios, core-js, vue(Framework), vue-router, vuetify, vuex

## O que você melhoraria se tivesse mais tempo ?
  ### Faria mais duas rotas na api, para cadastrar novo usuario admin, e para fazer login na aplicação, e com isso gerando um token para proteger as rotas, e com isso so que estivesse cadastrado e logado na aplicação poderia acessá-la, e fazer as repequitivas telas no frontend, para consumir esses endpoints, da api.

## Quais requisitos obrigatórios que não foram entregues ?
  ### Modais de confirmação, para deletar cadastro de estudante, não deu tempo.
