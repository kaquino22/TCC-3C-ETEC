using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using MervitApi.Repository;
using MervitApi.Data.Interface;
using Microsoft.Extensions.Logging;
using MervitApi.Services.Interface;
using MervitApi.Model;

namespace MervitApi.Services
{
    public class UsuarioServices : IUsuarioServices
    {
        public IUsuarioRepository UsuarioRepository { get; set; }
        private readonly ILogger<IUsuarioServices> _logger;

        public UsuarioServices(
           ILogger<IUsuarioServices> logger,
           IUsuarioRepository usuarioRepository)
        {
            UsuarioRepository = usuarioRepository;
            _logger = logger;
        }

        public Usuario GetUsuario(int id)
        {
            return UsuarioRepository.GetById(id);
        }

    }
}
