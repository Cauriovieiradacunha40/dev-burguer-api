
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
