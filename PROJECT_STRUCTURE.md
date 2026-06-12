
DEV-BURGUER-API

├── node_modules
│
└── src
    │
    ├── app
    │   │
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
    │   └── database.cjs
    │
    ├── database
    │   ├── index.js
    │   └── migrations
    │       ├── 20260527090857-create-users-table.js
    │       └── 20260610090701-create-products-table.js
    │
    ├── app.js
    ├── routes.js
    └── server.js