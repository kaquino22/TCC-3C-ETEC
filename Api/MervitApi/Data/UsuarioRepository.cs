using System;
using System.Collections.Generic;
using MervitApi.Model;
using MervitApi.Data;

namespace MervitApi.Data{
    public class UsuarioRepository {

        public Usuario GetUsuarioById(int id){
            Usuario user =  new Usuario();
            user.Id = 1;
            user.Email = "eae@gmail.com";
            user.Senha = "senha312";

            if(id == user.Id){
                return user;
            }

            return null;
        }
        public Usuario GetUsuarioByEmaileSenha(string email, string senha){
            Usuario user =  new Usuario();

            user.Email = email;
            user.Senha = senha;

            return user;
        }
        public Usuario PostUsuario(Usuario user){
            return null;
        }
    }
}