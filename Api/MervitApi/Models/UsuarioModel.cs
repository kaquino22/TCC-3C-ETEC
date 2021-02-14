using System;
using System.Collections.Generic;

#nullable disable

namespace MervitApi.Models
{
    public partial class UsuarioModel
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string SenhaTemp { get; set; }
    }
}
