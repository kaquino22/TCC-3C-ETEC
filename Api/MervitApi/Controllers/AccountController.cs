using MervitApi.Data.Interface;
using MervitApi.Helper;
using MervitApi.Models;
using MervitApi.Services.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MervitApi.Controllers
{
    [Route("Account")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService AccountService;

        public AccountController(
            IAccountService accountService
        )
        {
            AccountService = accountService;
        }

        [HttpPost]
        [Route("Login")]
        public ActionResult Login([FromBody] LoginViewModel dados)
        {
            var User = AccountService.Login(dados);

            if (User == null)
            {
                return Ok(new { error = true });
            }

            UsuarioModel usuario = new UsuarioModel();

            usuario.Email = User.Email;
            usuario.Nome = User.Nome;
            usuario.Id = User.Id;

            var token = TokenHelper.GenerateToken(User);

            return Ok(new { usuario, Token = token, error = false });
        }

        [HttpPost]
        [Route("Register")]
        public ActionResult Register([FromBody] RegisterViewModel register)
        {
            AccountService.Register(register);

            return Ok(new { success = true});
        }
    }
}


