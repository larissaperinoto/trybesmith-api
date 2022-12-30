# TrybeSmith API

[Trybe](https://www.betrybe.com/) is a technology school focused on training Web Developers and the TrybeSmith project was proposed as an activity to improve studies on back-end development with TypeScript.

## Description

The developed application is an API and a database with the content of a medieval articles store. The application must allow creating, reading, updating and removing items from the store's database. It also performs authentication to grant permissions to users when creating new orders.

## Technologies and Tools
<div>
    <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="mysql"/>
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="nodejs"/>
    <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="docker"/>
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="express"/>
    <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" alt="sequelize"/>
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript"/>
    <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="jwt"/> 
    <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white" alt="Swagger"/>
</div>

<br>

In the elaboration of the RESTful API, the **Model-Service-Controller(MSC)** architecture was used, in addition to the following tools:

- [TypeScript](https://www.typescriptlang.org/)
- [Node.JS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [MySQL](https://www.mysql.com/)
- [Docker](https://www.docker.com/)
- [Sequelize](https://sequelize.org/)
- [JWT](https://jwt.io/)
- [Joi](https://joi.dev/api/)

## ⚙️ How to use

To run the application, start by making a clone of this repository with the command below.

    git clone git@github.com:larissaperinoto/trybesmith-api.git
    
Navigate to the project root.

    cd trybesmith-api/
    
<details>
   <summary><strong>Running locally</strong></summary> 
  </br>
  <strong>Obs:</strong> To run the application this way you must have [Node.JS](https://nodejs.org/en/) installed on your machine.
  </br>
  </br>
  
  Install the dependencies with the command below.
  
    npm install
  
  Login to MySQL using your local credentials.
  
    mysql -r <your-username> -p
  
   Logged in the MySQL instance, run the **Trybesmith.sql** script to create the database.  
  
   Make a copy of the file **.env.example** with the name **.env** and fill in the information that is necessary to connect with the database.
  
  <details>
  <summary>Information that must be present in the file<strong>.env</strong></summary>
  
        MYSQL_USER=root
        MYSQL_PASSWORD=password
        MYSQL_HOST=localhost
        JWT_SECRET=secret
  
  </details>
  
   Start the application with the command below.
  
    npm start
  
</details>

<details>
   <summary><strong>Running with Docker</strong></summary> 
  </br>
  
  <strong>Obs:</strong> To run the application this way you must have [Docker](https://www.docker.com/) installed on your machine.
  
  </br>
  
  In the root of the project, upload the <strong>trybesmith</strong> and <strong>trybesmith_db</strong> containers using docker-compose.

    docker-compose up -d
    
  Open the <strong>trybesmith</strong> container terminal.

    docker exec -it trybesmith bash
  
   Once in the container terminal, run the command below to install the project's dependencies.
    
    npm install
    
  To connect to the database, open the  <strong>trybesmith_db</strong> container's terminal.
  
    docker exec -it trybesmith_db bash
    
  Login to the database using the credentials described in the <strong>docker-compose.yaml</strong> file.
  
    mysql -r root -p
  
  Logged in the MySQL instance, run the **Trybesmith.sql** script to create the database. 
  
    npm prestart
    
   Start the application with the command below.
  
    npm start
    
</details>

## Routes

 You can check all the routes by accessing the /docs endpoint in your browser when running the application.

<details>
    <summary>Routes preview</summary>
    
    
![Captura de tela de 2022-12-29 15-53-00](https://user-images.githubusercontent.com/98956659/209998561-e55a123f-8cf9-4708-969d-8a6a269daf92.png)
    
    
</details>


---
 
Developed by [Larissa Perinoto](www.linkedin.com/in/larissaperinoto), © 2022.
