using System;
using System.Collections.Generic;
using MervitApi.Data.Interface;
using MervitApi.Model;
using MervitApi.Repository;

namespace MervitApi.Data{
    public class UsuarioRepository : Repository<Usuario>, IUsuarioRepository {

        private readonly ApplicationDbContext _context;

        public UsuarioRepository(ApplicationDbContext context) : base(context)
        {
            _context = context;
        }

    }
}