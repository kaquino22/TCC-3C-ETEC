using MervitApi.Model;
using MervitApi.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace MervitApi.Services.Interface
{
    public interface IAccountService
    {
        Usuario Login(LoginViewModel login);
        void Register(RegisterViewModel register);
    }
}
