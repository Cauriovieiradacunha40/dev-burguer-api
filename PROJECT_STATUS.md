
# 🚀 LISTA CUMULATIVA — DEV-BURGUER-API

**1. Criada a pasta do projeto "dev-burguer-api" dentro da pasta "dev"** — organizando o projeto junto com outros, garantindo separação e fácil manutenção.

**2. Inicializado o projeto com npm, gerando o package.json** — criamos o arquivo de configuração central, onde serão gerenciadas dependências e scripts.

**3. Instalado o pnpm para gerenciar pacotes** — substituímos o npm por um gerenciador mais eficiente, que economiza espaço e acelera instalações.

**4. Utilizando o pnpm, instalado o framework Express** — Express será a base para a API, permitindo definir rotas e lógica de servidor.

**5. Criada a pasta `src`** — definida a camada principal de código-fonte da aplicação, centralizando toda a estrutura backend do projeto de forma organizada e escalável.

**6. Criado o arquivo server.js** — ponto de entrada do servidor, responsável por subir a aplicação e escutar requisições.

**7. Criado o arquivo api.js** — arquivo onde centralizaremos as rotas e a lógica de cada endpoint da API.

**8. Importada a instância do app (Express) no api.js** — a aplicação criada no server.js foi reaproveitada, permitindo definir rotas sobre a mesma instância.

**9. Definidas rotas no api.js utilizando a instância importada** — o arquivo de rotas passou a controlar endpoints da API, modularizando a lógica de requisições.

**10. Instalado o Biome no projeto** — adicionada ferramenta moderna de padronização e análise de código, responsável por formatação automática e melhoria da qualidade do código.

**11. Criado o arquivo `.gitignore`** — configurado para impedir que arquivos desnecessários ou pesados sejam enviados ao GitHub.

**12. Adicionada a pasta `node_modules` no `.gitignore`** — evitando que o Git rastreie dependências instaladas automaticamente, seguindo padrão profissional utilizado em projetos Node.js.

**13. Inicializado o repositório Git no projeto** — o projeto passou a possuir versionamento, permitindo histórico de alterações, commits e integração com GitHub.

**14. Realizado o primeiro commit da estrutura inicial do backend** — registrada oficialmente a fundação do projeto, criando um ponto seguro de restauração e evolução.

**15. Instalado o WSL2 (Windows Subsystem for Linux)** — adicionada camada Linux integrada ao Windows, permitindo compatibilidade com ferramentas modernas de infraestrutura e containers.

**16. Instalado o Docker Desktop** — adicionada plataforma de containers ao ambiente de desenvolvimento, preparando o projeto para futuras práticas de containerização e arquitetura moderna.

**17. Integrado o Docker ao GitHub utilizando o usuário "cauriov3"** — configurada autenticação entre Docker e GitHub, preparando ambiente para futuras integrações com imagens, containers e workflows modernos de desenvolvimento.

**18. Criado o primeiro container PostgreSQL utilizando Docker** — o banco de dados passou a rodar isoladamente dentro de um container, simulando ambiente profissional moderno de infraestrutura backend.

**19. Configurado o container PostgreSQL com usuário, senha, banco inicial e mapeamento de portas** — o ambiente de banco foi preparado para comunicação futura com a API backend.

**20. Executado o comando `docker ps` para validação do container** — confirmado que o PostgreSQL containerizado estava ativo e funcionando corretamente.

**21. Criado o arquivo `.sequelizerc`** — adicionada configuração personalizada do Sequelize CLI, permitindo organizar models, migrations e estrutura do banco de forma profissional.

**22. Criada a pasta `database`** — iniciada a camada de persistência de dados do projeto, centralizando configurações e estrutura relacionada ao banco.

**23. Criada a pasta `migrations` dentro de `database`** — preparada estrutura para versionamento do banco de dados, permitindo criar e controlar alterações estruturais de forma organizada e segura.

**24. Criada a pasta `app`** — iniciada a separação da lógica principal da aplicação backend, preparando arquitetura modular e escalável.

**25. Criada a pasta `models` dentro de `app`** — preparada estrutura para criação dos modelos Sequelize, responsáveis por representar tabelas e entidades do banco de dados dentro da aplicação.

**26. Criada a pasta `config`** — adicionada camada de configuração da aplicação, centralizando arquivos responsáveis por parâmetros e conexões do sistema.

**27. Criado o arquivo `database.js` dentro de `config`** — preparado arquivo responsável pela futura configuração da conexão entre a API e o PostgreSQL containerizado.

**28. Criada a primeira migration `create-users-table`** — iniciada a modelagem estrutural do banco de dados através do Sequelize, preparando a criação da tabela de usuários.

**29. Corrigida a configuração do arquivo `.sequelizerc`** — ajustados os caminhos de migrations e models para permitir que o Sequelize localizasse corretamente a estrutura do projeto.

**30. Executada a migration com sucesso utilizando `pnpm sequelize db:migrate`** — criada fisicamente a tabela `users` dentro do PostgreSQL containerizado.

**31. Criado o arquivo de migration `20260527090857-create-users-table.js`** — registrada oficialmente a primeira alteração estrutural versionada do banco de dados.

**32. Configurada a tabela `users` com UUID como chave primária** — adotado padrão moderno de identificação única global para usuários.

**33. Configurado o campo `email` com restrição de unicidade (`unique`)** — garantindo que não existam usuários duplicados com o mesmo endereço de e-mail.

**34. Conectado o PostgreSQL ao Beekeeper Studio** — permitindo visualização e gerenciamento gráfico do banco de dados.

**35. Validada a criação da tabela `users` no PostgreSQL** — confirmada a existência da tabela e de todas as colunas definidas pela migration.

**36. Validada a criação automática da tabela `SequelizeMeta`** — confirmado o mecanismo utilizado pelo Sequelize para controlar o histórico de migrations executadas.

**37. Realizado troubleshooting completo da infraestrutura Docker + PostgreSQL + Sequelize** — identificados e corrigidos problemas envolvendo container parado, conexão com banco e execução de migrations.

**38. Validada visualmente a estrutura da tabela `users` no Beekeeper Studio** — confirmadas as colunas:

* id
* name
* email
* password_hash
* admin
* created_at
* updated_at

**39. Confirmado o funcionamento completo do fluxo Docker → PostgreSQL → Sequelize → Migration → Beekeeper** — validando a integração entre todas as camadas da infraestrutura backend.

40. Estudado o padrão de arquitetura MVC (Model-View-Controller) — introduzido o conceito de separação de responsabilidades entre dados (Model), controle de requisições (Controller) e interface (View).

41. Criada a pasta controllers dentro de app — iniciada a camada responsável por receber requisições, coordenar a lógica da aplicação e retornar respostas, seguindo o padrão MVC.

**42. Criado o arquivo `User.js` dentro da pasta `models`** — iniciado o primeiro Model Sequelize do projeto, responsável por representar a tabela `users` dentro da aplicação Node.js.

**43. Criado o arquivo `index.js` dentro da pasta `database`** — centralizada a inicialização do Sequelize, a conexão com o PostgreSQL e o registro dos Models da aplicação.

44. Instalado o pacote `uuid` — adicionada biblioteca responsável pela geração de identificadores únicos universais (UUID), amplamente utilizada para criação de IDs únicos em aplicações backend e sistemas distribuídos.

45. Integrado o pacote `uuid` à aplicação — utilizada a função `v4()` para geração automática de identificadores únicos (UUID), permitindo criar usuários com IDs únicos antes da persistência no banco de dados.

46. Validado o fluxo completo de persistência de dados — realizada a criação de um usuário através da API, com geração de UUID, utilização do Model Sequelize, execução de INSERT no PostgreSQL e confirmação visual do registro através do Beekeeper Studio.

47. Criado o arquivo `routes.js` — centralizadas as rotas da aplicação em um arquivo dedicado, separando a definição dos endpoints da configuração principal do servidor e preparando a estrutura para crescimento organizado da API.

48. Criado o arquivo `UserController.js` dentro da pasta `controllers` — iniciada a camada Controller da arquitetura MVC, responsável por receber requisições HTTP, coordenar as operações da aplicação e retornar respostas ao cliente, separando a lógica de controle das rotas e dos modelos.

49. Implementado o método `store()` no `UserController` — criada a lógica responsável por receber dados da requisição, gerar um UUID, criar usuários utilizando o Sequelize e retornar uma resposta HTTP 201 sem expor o campo de senha.

50. Validado o primeiro teste de API com Insomnia — realizada uma requisição POST para /users, enviando dados em JSON, executando o fluxo completo Routes → Controller → Model → Sequelize → PostgreSQL e recebendo resposta HTTP 201 Created.

51. Instalado e configurado o Yup — implementada validação de entrada para criação de usuários, garantindo campos obrigatórios, formato correto de e-mail, tamanho mínimo da senha e retorno estruturado de erros de validação.

52. Implementada verificação de e-mail duplicado — adicionada consulta ao banco utilizando User.findOne() para impedir cadastro de múltiplos usuários com o mesmo endereço de e-mail.

53. Instalado o bcrypt — adicionada ao projeto a biblioteca responsável pela criptografia de senhas.

54. Implementada criptografia de senha no UserController — utilizando bcrypt.hash(password, 10) para transformar a senha recebida em um hash seguro antes de salvar no PostgreSQL.

55. Alterado o fluxo de criação de usuários — a API passou a receber o campo password, gerar automaticamente o password_hash criptografado e armazenar apenas o hash no banco de dados.

56. Implementada primeira camada de segurança de credenciais — eliminada a gravação de senhas em texto puro no banco de dados.

57. Validado diagnóstico e correção de rota /sessions, compreendendo a diferença entre URL da requisição e rota registrada no Express.

58. Criado o arquivo `SessionController.js` dentro da pasta `controllers` — iniciada a camada responsável pela autenticação de usuários através de login.

59. Criada a rota `POST /session` — endpoint responsável por receber credenciais de acesso e iniciar o processo de autenticação.

60. Implementada validação de login utilizando Yup — adicionadas regras para validação de e-mail e senha antes da autenticação.

61. Implementada busca de usuário por e-mail utilizando `User.findOne()` — permitindo localizar usuários cadastrados no PostgreSQL durante o login.

62. Implementada verificação de senha utilizando `bcrypt.compare()` — comparando de forma segura a senha enviada pelo usuário com o `password_hash` armazenado no banco de dados.

63. Realizado troubleshooting completo do fluxo de autenticação — identificados e corrigidos erros relacionados a JSON inválido, validações Yup e importação do bcrypt.

64. Validado o funcionamento completo da rota `POST /session` através do Insomnia — confirmando a integração entre rota, controller, Sequelize e PostgreSQL.

65. Realizado o primeiro login com sucesso na aplicação — retorno HTTP 200 OK confirmando autenticação válida.

66. Implementado retorno seguro de dados do usuário autenticado — retornando apenas id, name, email e admin, sem expor informações sensíveis.

67. Confirmada a integração completa entre Express, Sequelize, PostgreSQL, Yup e bcrypt durante o processo de autenticação.

68. Instalado e configurado o Insomnia para testes de autenticação — criando requisições específicas para cadastro e login de usuários.

69. Realizado o primeiro backup oficial do banco de dados PostgreSQL — gerado o arquivo `backup-001-users-module-stable.backup` utilizando `pg_dump` executado diretamente no container Docker.

70. Estruturadas as pastas de backup do projeto — separando backups de código-fonte (`code_backups`) e backups de banco de dados (`database_backups`).

71. Validado o fluxo completo de autenticação — Login → Validação Yup → Busca no banco → bcrypt.compare() → Resposta HTTP 200 OK.

72. Concluído o primeiro módulo completo de usuários da aplicação — incluindo cadastro, validação, criptografia de senha, autenticação e persistência segura de dados.

73. Criada a migration create-products-table — iniciada a estrutura de banco de dados para o módulo de produtos, gerando um novo arquivo de migration versionado pelo Sequelize.

74. Implementada a migration create-products-table — definida a estrutura inicial da tabela products, incluindo chave primária auto incremento, nome, preço, caminho da imagem, categoria e campos de auditoria (created_at e updated_at).

Tabela criada:
products

Campos:
- id (INTEGER, PK, AUTO_INCREMENT)
- name (STRING)
- price (STRING)
- path (STRING)
- category (STRING)
- created_at (DATE)
- updated_at (DATE)

75. Executada a migration create-products-table com sucesso — a tabela products foi criada fisicamente no PostgreSQL e validada através do Beekeeper Studio.

Tabelas atuais:
- users
- products
- SequelizeMeta

76. Criado e integrado o ProductController — implementada a primeira rota POST /products, retornando resposta HTTP 201 para validação da estrutura inicial do módulo de produtos.

77. Realizado troubleshooting de importação ES Modules — identificado e corrigido erro ERR_MODULE_NOT_FOUND causado por divergência entre o nome do arquivo ProductController.js e o caminho utilizado no import.

78. Implementada validação de produtos com Yup — a API passou a validar os dados recebidos na rota POST /products antes de processar a requisição.

79. Validado o campo price como número — identificado e corrigido erro de tipo (string → number) durante os testes no Insomnia.

80. Realizado primeiro teste bem-sucedido da rota POST /products — a requisição foi aceita após atender às regras de validação definidas no ProductController.

81. Criado o ProductController.js — iniciada a camada de controle do módulo de produtos seguindo a arquitetura MVC.

82. Integrada a rota POST /products ao sistema de rotas da API.

83. Implementada validação de produtos utilizando Yup, exigindo:
- name
- price
- category

84. Validado o primeiro fluxo funcional do módulo de produtos através do Insomnia.

85. Criada a migration create-products-table — adicionada a segunda migration oficial do projeto para criação da tabela products.

86. Executada e validada a migration create-products-table — tabela products confirmada no PostgreSQL através do Beekeeper Studio.

87. Estrutura da camada database atualizada — projeto possui index.js para inicialização do Sequelize e pasta migrations para versionamento do banco.

88. Criado o Model Product.js — iniciada a representação da tabela products dentro da aplicação utilizando Sequelize.

89. Estruturado o Product Model seguindo o padrão utilizado anteriormente no User Model.

90. Concluída a Aula 21 — Criando Model de Produto.
