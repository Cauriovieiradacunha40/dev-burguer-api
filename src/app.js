import express from 'express'; // Import the Express library
import routes from './routes.js'; 

const app = express(); // variavel = express, passa a ser..
app.use(routes);    
app.use(express.json()); // Middleware para interpretar o corpo das requisições como JSON
export default app; // exporta a variavel app para ser usada em outros arquivos
