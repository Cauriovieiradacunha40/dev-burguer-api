/*
store -> cria dados
index -> lista dados
show -> mostra um dado específico
update -> atualiza um dado específico
delete -> deleta um dado específico
 */

import { v4 } from 'uuid';
import User from '../models/User.js';

class UserController {
  async store(request, response) {
    const { name, email, password_hash, admin } = request.body;

    const user = await User.create({
      id: v4(),
      name,
      email,
      password_hash,
      admin,
    });

    return response.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
        admin: user.admin,
    });
  }
}

export default new UserController();
