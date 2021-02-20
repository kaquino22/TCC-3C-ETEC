using System;
using System.Collections.Generic;

#nullable disable

namespace MervitApi.Models
{
    public class RegisterViewModel
    {
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public DateTime dataRegistro { get; set; }
    }
}
