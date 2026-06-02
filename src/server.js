
import app from './app.js';            // Importa a variável app do arquivo app.js
import './database/index.js';          // Importa o arquivo de configuração do banco de dados para estabelecer a conexão

app.listen(3001, () => console.log("aplication running on port 3001"));      // Inicia o servidor na porta 3001 e exibe uma mensagem no console quando estiver rodando



 