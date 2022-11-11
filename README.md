# TrybeSmith API

A [Trybe](https://www.betrybe.com/) é uma escola de tecnologia com foco em formação de Desenvolvedores Web e o projeto TrybeSmith foi proposto como atividade de aprimoramento dos estudos sobre desenvolvimento back-end com TypeScript. 

## Objetivo

A aplicação desenvolvida é uma API e um banco de dados com o conteúdo de um loja de artigos medievais. A aplicação deve permitir fazer operações de criação, leitura, atualização e remoção dos artigos no banco de dados da loja. Além de realizar as devidas autenticações para conceder permissões aos usuários.

## Tecnologias e Ferramentas
<div>
    <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="mysql"/>
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="nodejs"/>
    <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="docker"/>
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="express"/>
    <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" alt="sequelize"/>
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript"/>
    <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="jwt"/> 
</div>

<br>

Na elaboração da API RESTful utilizou-se a arquitetura **Model-Service-Controller(MSC)**, além das seguintes ferramentas:

- [TypeScript](https://www.typescriptlang.org/)
- [Node.JS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [MySQL](https://www.mysql.com/)
- [Docker](https://www.docker.com/)
- [Sequelize](https://sequelize.org/)
- [JWT](https://jwt.io/)
- [Joi](https://joi.dev/api/)

## ⚙️ Execução

Para executar a aplicação inicie realizando o clone deste repositório com o comando abaixo.

    git clone git@github.com:larissaperinoto/trybesmith-api.git
    
Navegue até a raíz do projeto.

    cd trybesmith-api/
    
<details>
   <summary><strong>Rodando local</strong></summary> 
  </br>
  <strong>Obs:</strong> Para rodar a aplicação dessa forma você deve ter o [Node.JS](https://nodejs.org/en/) instalado na sua máquina.
  </br>
  </br>
  Instale as dependências com o comando abaixo.
  
    npm install
  
  Faça login no MySQL usando suas credenciais locais.
  
    mysql -r <seu-usuario> -p
  
  Logado na instância do MySQL execute o script **Trybesmith.sql** para a criação do banco de dados.  
  
  Faça uma cópia do arquivo **.env.example** com o nome **.env** e preencha com as informações que são necessárias para se conectar com o banco.
  
  <details>
  <summary>Informações que devem estar presentes no arquivo <strong>.env</strong></summary>
  
        MYSQL_USER=root
        MYSQL_PASSWORD=password
        MYSQL_HOST=localhost
        JWT_SECRET=secret
  
  </details>
  
  Inicie a aplicação com o comando abaixo.
  
    npm start
  
</details>

<details>
   <summary><strong>Utilizando o Docker</strong></summary> 
  </br>
  
  <strong>Obs:</strong> Para rodar a aplicação dessa forma você deve ter o [Docker](https://www.docker.com/) instalado na sua máquina.
  
  </br>
  
  Na raíz do projeto, suba os containers <strong>trybesmith</strong> e <strong>trybesmith_db</strong> utilizando o docker-compose.

    docker-compose up -d
    
  Abra o terminal do container <strong>trybesmith</strong>.

    docker exec -it trybesmith bash

  Uma vez no terminal do container, execute o comando abaixo para instalar as dependências do projeto.
    
    npm install
    
  Para se conectar com o banco de dados, abra o terminal do container <strong>trybesmith_db</strong>.
  
    docker exec -it trybesmith_db bash
    
  Faça login no banco de dados utilizando as credencias descritas no arquivo <strong>docker-compose.yaml</strong>.
  
    mysql -r root -p

  Logado na instância do MySQL execute o script **Trybesmith.sql** para a criação do banco de dados.  
  
    npm prestart
    
  Inicie a aplicação com o comando abaixo.
  
    npm start
    
</details>

---
 
Desenvolvido por [Larissa Perinoto](www.linkedin.com/in/larissaperinoto), © 2022.
