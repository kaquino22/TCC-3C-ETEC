using System;
using System.Collections.Generic;
using MervitApi.Model;
using MervitApi.Data;
using MervitApi.Models;
using MervitApi.Data.Interface;

namespace MervitApi.Data{
    public class UsuarioRepository : Repository<Usuario>, IUsuarioRepository {

        private readonly ApplicationDbContext _context;

        public UsuarioRepository(ApplicationDbContext context) : base(context)
        {
            _context = context;
        }

    }
}