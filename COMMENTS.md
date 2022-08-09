# Instruções de como instalar e rodar o projeto

## 1 - Clone o repositório, na brach master.

## 2 - Após clonar entre na pasta /api e digite npm instal, para instalar as depedências.
### 2.1 - Na raiz da pasta /api, crie o arquivo .env, prenchendo os seguintes campos, DB_USER= Seu usuário, PASSWORD=Sua senha, DATABASE=registration, PORT=3001
### 2.2 - Criado e preenchido o arquivo .env, execute os seguintes comandos no terminal, npx sequelize-cli db:create, e depois npx sequelize-cli db:migrate, isso fara com que o banco seja criado, já com as tabelas.
### 2.3 - Feito esses passos, dentro da pasta /api, digite o comando npm start, para ligar a api.

## 3 - Agora entre na pasta /frontend, e digite npm instal, para instalar as depedências.
### 3.1 - Feito a instalção das depedências nas pasta /frontend, digite o comando ainda dentra da pasta /frontend npm start, para ligar a aplicação, e a mesma já estara pronta para uso.
