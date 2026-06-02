
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
