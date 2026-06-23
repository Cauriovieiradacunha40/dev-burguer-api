
src
├── app
│   ├── controllers
│   │   ├── ProductController.js
│   │   ├── SessionController.js
│   │   └── UserController.js
│   │
│   └── models
│       ├── Product.js
│       └── User.js
│
├── config
│   ├── auth.js
│   ├── fileRoutes.cjs
│   └── multer.cjs
│
├── database
│
├── app.js
├── routes.js
└── server.js

uploads
└── 5a68dd29-e137-4fe3-af2e-53e27027fd31-Hamburguer.png



DEV-BURGUER-API
│
├── src
│   │
│   ├── app
│   │   │
│   │   ├── controllers
│   │   │   ├── ProductController.js
│   │   │   ├── SessionController.js
│   │   │   └── UserController.js
│   │   │
│   │   └── models
│   │       ├── Product.js
│   │       └── User.js
│   │
│   ├── config
│   │   ├── auth.js
│   │   ├── fileRoutes.cjs
│   │   └── multer.cjs
│   │
│   ├── database
│   │
│   ├── middlewares
│   │   └── auth.js          ⭐ (Novo - Aula 3)
│   │
│   ├── app.js
│   ├── routes.js
│   └── server.js
│
├── uploads
│   └── 5a68dd29-e137-4fe3-af2e-53e27027fd31-Hamburguer.png
│
├── .gitignore
├── .sequelizerc
├── biome.json
├── package.json
├── pnpm-lock.yaml
├── PROJECT_STATUS.md
└── PROJECT_STRUCTURE.mds


DEV-BURGUER-API
│
├── src
│   │
│   ├── app
│   │   ├── controllers
│   │   │   ├── ProductController.js
│   │   │   ├── SessionController.js
│   │   │   ├── UserController.js
│   │   │   └── CategoryController.js      ← NOVO
│   │   │
│   │   ├── models
│   │   │   ├── Product.js
│   │   │   ├── User.js
│   │   │   └── Category.js                ← NOVO
│   │
│   ├── config
│   │   ├── auth.js
│   │   ├── database.cjs
│   │   ├── fileRoutes.cjs
│   │   └── multer.cjs
│   │
│   ├── database
│   │   └── migrations
│   │       ├── ...
│   │       └── 20260622083528-create-categories-table.js   ← NOVA
│   │
│   ├── middlewares
│   │   └── auth.js
│   │
│   ├── app.js
│   ├── routes.js
│   └── server.js



