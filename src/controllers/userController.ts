import { Request, Response } from 'express';
import { User } from '../models/User';

export const user = (req: Request, res: Response) => {
  req
  res.send('User');
}

export const createUser = (req: Request, res: Response) => {
  const { name, age, email } = req.body;
  try {
    User.create({
      name,
      age,
      email
    });
    req.flash('success', 'Usuário criado com sucesso!');
    req.flash('re', '.');
    res.redirect('/');
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
}

export const editUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await User.findByPk(id);

  res.render('pages/useredit', {
    user,
    title: 'Editar Usuário'
  });
}

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, age, email } = req.body;

  try {
    await User.update({
      name,
      age,
      email
    }, {
      where: {
        id
      }
    });
    req.flash('success', 'Usuário atualizado com sucesso!');
    res.redirect('/');
  }
  catch (error) {
    console.log(error);
    res.redirect('/');
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await User.destroy({
      where: {
        id
      }
    });
    req.flash('success', 'Usuário deletado com sucesso!');
    res.redirect('/');
  }
  catch (error) {
    console.log(error);
    res.redirect('/');
  }
}