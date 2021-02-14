using Microsoft.AspNetCore.Mvc;
using MervitApi.Data;
using MervitApi.Model;

namespace MervitApi.Controller
{
    [ApiController]
    [Route("usuario")]
    public class UsuarioController : ControllerBase{
        private readonly UsuarioRepository usuarioRepository;

        public UsuarioController(){
            usuarioRepository = new UsuarioRepository();
        }

        [HttpGet]    
        public Usuario Login(string Email, string Senha){
            return usuarioRepository.GetUsuarioByEmaileSenha(Email,Senha);
        }

        [HttpGet("{id}")]    
        public Usuario GetById(int id){
            return usuarioRepository.GetUsuarioById(id);
        }
    }
}