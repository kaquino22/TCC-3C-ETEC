using MervitApi.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace MervitApi.Services.Interface
{
    public interface IUsuarioServices
    {
        Usuario GetUsuario(int id);
    }
}
