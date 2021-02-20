using Microsoft.AspNetCore.Mvc;
using MervitApi.Data;
using MervitApi.Model;
using MervitApi.Data.Interface;
using Microsoft.AspNetCore.Authorization;
using MervitApi.Services.Interface;

namespace MervitApi.Controller
{
    [ApiController]
    [Route("usuario")]
    public class UsuarioController : ControllerBase{
        public UsuarioController(){}

        [HttpGet("{id}")]    
        public ActionResult GetById([FromServices] IUsuarioServices usuarioService,int id){
            var User = usuarioService.GetUsuario(id);

            if (User == null)
            {
                return Ok(new { error = "Usuário não encontrado!" });
            }

            return Ok(new { User });
        }
    }
}