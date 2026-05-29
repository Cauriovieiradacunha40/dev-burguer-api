module.exports = {                                //sintaxe antiga

  dialect: 'postgres',                            // banco de dados utilizado
  host: 'localhost',                              // local onde o banco de dados está hospedado
  port: 5433,                                     // porta de conexão com o banco de dados
  username: 'admin',                              // nome de usuário para acessar o banco de dados
  password: '123456',                             // senha para acessar o banco de dados
  database: 'dev-burguer-db',                     // nome do banco de dados a ser utilizado
  define: {                                       // opções de configuração para os modelos do Sequelize
    
    timestamps: true,                             // adiciona automaticamente os campos createdAt e updatedAt nas tabelas do banco de dados
    underscored: true,                            // utiliza o formato snake_case para os nomes das colunas no banco de dados
    underscoredAll: true,                         // utiliza o formato snake_case para os nomes das tabelas e colunas no banco de dados
  },
};



