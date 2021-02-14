using Microsoft.AspNetCore.Mvc;
using MervitApi.Data;
using MervitApi.Model;
using MervitApi.Data.Interface;
using Microsoft.AspNetCore.Authorization;

namespace MervitApi.Controller
{
    [ApiController]
    [Authorize]
    [Route("usuario")]
    public class UsuarioController : ControllerBase{
        private readonly IUsuarioRepository UsuarioRepository;

        public UsuarioController(
            IUsuarioRepository usuarioRepository
        ){
            UsuarioRepository = usuarioRepository;
        }

        [HttpGet("{id}")]    
        public ActionResult GetById(int id){
            var User = UsuarioRepository.GetById(id);

            if (User == null)
            {
                return Ok(new { error = "Usuário não encontrado!" });
            }

            return Ok(new { User });
        }
    }
}