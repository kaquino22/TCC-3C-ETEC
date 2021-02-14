using MervitApi.Data.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MervitApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IUsuarioRepository UsuarioRepository;

        public AccountController(
            IUsuarioRepository usuarioRepository
        )
        {
            UsuarioRepository = usuarioRepository;
        }

        [HttpGet]
        [Route("login")]
        public ActionResult Login(string Email, string Senha)
        {
            var User = UsuarioRepository.FindFirstBy(x => x.Email == Email && x.Senha == Senha);

            if (User == null)
            {
                return Ok(new { error = "Usuário não encontrado!" });
            }

            return Ok(new { User });
        }
    }
}


