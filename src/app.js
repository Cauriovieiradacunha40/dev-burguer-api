import express from 'express'; // Import the Express library
import routes from './routes.js'; 
import fileRoutesConfig from './config/fileRoutes.cjs';

const app = express(); // variavel = express, passa a ser..

console.log(fileRoutesConfig);  

app.use(express.json());                              // Middleware para interpretar o corpo das requisições como JSON
app.use(express.urlencoded({ extended: true }));      // Middleware para interpretar o corpo das requisições como URL-encoded
app.use('/product-file', fileRoutesConfig);  

app.use(routes);

export default app;                                   // exporta a variavel app para ser usada em outros arquivos
 