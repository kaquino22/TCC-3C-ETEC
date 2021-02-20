using System;

namespace MervitApi.Model
{
    public class Usuario{

        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha {get;set;}
        public string SenhaTemp { get; set; }
        public DateTime DataRegistro { get; set; }
    }
}