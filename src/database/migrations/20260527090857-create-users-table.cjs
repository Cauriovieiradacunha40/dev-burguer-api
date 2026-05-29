'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        primaryKey: true,                    //identificador único para cada usuárioS
        allowNull: false,                    //não permite valores nulos, garantindo que cada usuário tenha um ID válido
        type: Sequelize.UUID,                //tipo de dado UUID (Universally Unique Identifier), que é um identificador único globalmente
        defaultValue: Sequelize.UUIDV4,      //gera automaticamente um UUID versão 4 para cada novo usuário criado
      },
      name: {
        type: Sequelize.STRING,              //tipo de dado STRING para armazenar o nome do usuário
        allowNull: false,                    //não permite valores nulos, garantindo que cada usuário tenha um nome
      },  
      email: {
        type: Sequelize.STRING,             //tipo de dado STRING para armazenar o email do usuário
        allowNull:false,                    //não permite valores nulos, garantindo que cada usuário tenha um email
        unique: true,                       //garante que cada email seja único na tabela, evitando duplicatas
      },
      password_hash: {
        type: Sequelize.STRING,             //tipo de dado STRING para armazenar o hash da senha do usuário
        allowNull: false,                   //não permite valores nulos, garantindo que cada usuário tenha uma senha
      },
      admin: {
        type: Sequelize.BOOLEAN,            //tipo de dado BOOLEAN para indicar se o usuário é um administrador
        defaultValue: false,                //define o valor padrão como false, indicando que os usuários não são administradores por padrão
      },
      created_at: {
        type: Sequelize.DATE,               //tipo de dado DATE para armazenar a data de criação do usuário
        allowNull: false,                   //não permite valores nulos, garantindo que cada usuário tenha uma data de criação
      }, 
      updated_at: {
        type: Sequelize.DATE,              //tipo de dado DATE para armazenar a data de atualização do usuário
        allowNull: false,                   //não permite valores nulos, garantindo que cada usuário tenha uma data de atualização
      },
    });
  },

  async down(queryInterface,) {      //método para desfazer a migração, ou seja, para remover a tabela 'users' caso seja necessário
    await queryInterface.dropTable('users'); 
  },
};

