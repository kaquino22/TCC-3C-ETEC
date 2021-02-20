using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using MervitApi.Repository;
using MervitApi.Data.Interface;
using Microsoft.Extensions.Logging;
using MervitApi.Services.Interface;
using MervitApi.Model;
using MervitApi.Models;

namespace MervitApi.Services
{
    public class AccountService : IAccountService
    {
        public IUsuarioRepository UsuarioRepository { get; set; }
        private readonly ILogger<IUsuarioServices> _logger;

        public AccountService(
           ILogger<IUsuarioServices> logger,
           IUsuarioRepository usuarioRepository)
        {
            UsuarioRepository = usuarioRepository;
            _logger = logger;
        }

        public Usuario Login(LoginViewModel dados)
        {
            return UsuarioRepository.FindFirstBy(x => x.Email == dados.Email && x.Senha == dados.Senha);
        }

        public void Register(RegisterViewModel dados)
        {
            Usuario user = new Usuario();            

            user.Nome = dados.Nome;
            user.Email = dados.Email;
            user.Senha = dados.Senha;
            user.DataRegistro = DateTime.Now;

            UsuarioRepository.Add(user);
            UsuarioRepository.SaveChanges();
        }
    }
}
